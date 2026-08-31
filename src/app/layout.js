import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "System_Log: B. Hurtado",
  description:
    "Desarrollador Frontend & Datos. Registro técnico de arquitectura, optimización y resolución de problemas de software.",
  keywords: ["Frontend", "Data Engineering", "Next.js", "SQL", "React"],
  openGraph: {
    title: "System_Log: B. Hurtado",
    description: "Desarrollador Frontend & Datos",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
