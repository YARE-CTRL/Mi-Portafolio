---
title: "Optimización de JOINs Complejos en PostgreSQL: De 12s a 400ms"
date: "2026-09-28"
category: "Bases de Datos"
categoryColor: "blue"
excerpt: "Un caso real de optimización de una consulta SQL que cruzaba 4 tablas y tardaba 12 segundos. El proceso de diagnóstico y la solución paso a paso."
readTime: "8 min"
---

## El Punto de Partida

Una consulta de reportes cruzaba 4 tablas y tardaba **12 segundos**. En un dashboard que se carga al entrar a la aplicación, eso es inaceptable.

```sql
-- Consulta original (lenta)
SELECT 
  u.nombre, u.email,
  p.titulo AS proyecto,
  t.nombre AS tarea,
  c.texto AS comentario
FROM usuarios u
JOIN proyectos p ON u.id = p.usuario_id
JOIN tareas t ON p.id = t.proyecto_id  
JOIN comentarios c ON t.id = c.tarea_id
WHERE u.activo = true
ORDER BY c.created_at DESC;
```

## Paso 1: EXPLAIN ANALYZE

Siempre, **siempre**, empieza con `EXPLAIN ANALYZE`. Es la radiografía de tu consulta.

```sql
EXPLAIN ANALYZE [consulta aquí];
```

El output reveló el problema inmediatamente:

```
Seq Scan on comentarios (cost=0.00..45231.00 rows=2100000)
  -> Seq Scan on tareas (cost=0.00..8920.00 rows=450000)
```

**Sequential Scans** en tablas de millones de filas. PostgreSQL estaba leyendo cada registro uno por uno porque no existían índices.

## Paso 2: Crear los Índices Correctos

```sql
-- Índices en las columnas de JOIN y WHERE
CREATE INDEX CONCURRENTLY idx_proyectos_usuario_id ON proyectos(usuario_id);
CREATE INDEX CONCURRENTLY idx_tareas_proyecto_id ON tareas(proyecto_id);
CREATE INDEX CONCURRENTLY idx_comentarios_tarea_id ON comentarios(tarea_id);
CREATE INDEX CONCURRENTLY idx_comentarios_created_at ON comentarios(created_at DESC);
CREATE INDEX CONCURRENTLY idx_usuarios_activo ON usuarios(activo) WHERE activo = true;
```

> `CONCURRENTLY` es clave en producción: crea el índice sin bloquear las escrituras en la tabla.

## Paso 3: Resultado

```
-- Antes: 12,340ms
-- Después: 390ms
-- Mejora: 96.8% más rápido
```

`EXPLAIN ANALYZE` ahora mostraba `Index Scan` en todas las tablas. El plan de ejecución pasó de leer 2 millones de filas a leer exactamente las que necesitaba.

## La Regla de Oro

> Indexa las columnas que usas en `JOIN`, `WHERE`, y `ORDER BY`. Usa `EXPLAIN ANALYZE` antes y después para medir el impacto real.
