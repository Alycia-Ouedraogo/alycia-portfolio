import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alycia — Développeuse & Fondatrice",
  description:
    "Étudiante en informatique, développeuse mobile et fondatrice de startup, créant des produits qui résolvent de vrais problèmes dans les marchés émergents.",
  openGraph: {
    title: "Alycia — Développeuse & Fondatrice",
    description:
      "Étudiante en informatique, développeuse mobile et fondatrice de startup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
