import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syfit - Gestión inteligente de gimnasios',
  description: 'Sistema en la nube que centraliza tu administración y optimiza la operación diaria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
