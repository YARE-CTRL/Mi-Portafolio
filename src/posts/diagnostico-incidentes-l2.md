---
title: "Diagnóstico de Incidentes L2 en Plataformas Core con Dynatrace"
date: "2026-09-15"
category: "SRE & Operaciones"
categoryColor: "green"
excerpt: "Cómo usar trazas distribuidas y stack traces para encontrar la causa raíz de un incidente de producción antes de que escale a L3."
readTime: "6 min"
---

## El Problema

Son las 2:00 AM. El equipo de L1 escala un incidente: los tiempos de respuesta del servicio de consulta de pólizas de Suramericana se dispararon de 200ms a 8 segundos. Los usuarios no pueden ver su información. El SLA dice que tienes 30 minutos para resolver o compensar.

Este es el escenario real que enfrenté. Aquí está el proceso exacto que seguí.

## Paso 1: No Adivines, Observa

El error más común en soporte L2 es empezar a reiniciar servicios al azar esperando que "se arregle solo". Eso es apagar un incendio con gasolina.

Lo primero es abrir Dynatrace y buscar el servicio afectado en el **Service Flow**. Esto te muestra el mapa de dependencias en tiempo real: qué llama a qué.

```
[API Gateway] → [Servicio Pólizas] → [DB Oracle - Conexión lenta ⚠️]
```

En menos de 2 minutos ya sé que el problema NO está en el código de la aplicación, sino en la capa de base de datos.

## Paso 2: Analizar el Stack Trace

Dynatrace captura automáticamente los stack traces de las transacciones lentas. Al abrir una transacción fallida, encontré esto:

```
ORA-00054: resource busy and acquire with NOWAIT specified
  at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:447)
  at oracle.jdbc.driver.T4C8Oall.processError(T4C8Oall.java:479)
  at com.suramericana.polizas.PolizaRepository.findById(PolizaRepository.java:89)
```

`ORA-00054` en Oracle significa que una tabla está **bloqueada** por otra transacción. No es un bug de la aplicación, es un **lock de base de datos**.

## Paso 3: Resolver y Documentar

Con esa información, el equipo DBA pudo identificar la sesión bloqueante en menos de 5 minutos y terminarla. El tiempo de respuesta volvió a 200ms inmediatamente.

**El post-mortem registró:**
- **MTTR (Mean Time To Resolve):** 18 minutos (dentro del SLA de 30 min)
- **Causa Raíz:** Proceso batch de reportes nocturnos que no liberaba un lock en tabla `POL_VIGENCIAS`
- **Acción Correctiva:** Ajuste en el proceso batch para usar `NOWAIT` y manejar la excepción correctamente

## Conclusión

La observabilidad no es un lujo, es la diferencia entre resolver en 18 minutos o en 3 horas. Dynatrace, New Relic, Datadog — cualquier APM te da los ojos que necesitas para operar sistemas críticos con confianza.
