import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Admisión · Liceo Francés', description: 'Calificación de admisión y radicación de resultados de preescolar.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body>{children}</body></html>; }
