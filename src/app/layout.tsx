import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Nizom – We Solve Business Problems & Develop Solutions',
  description:
    'Nizom is a technology-driven company specializing in app development, QA, UI/UX design, and DevOps solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Urbanist:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
