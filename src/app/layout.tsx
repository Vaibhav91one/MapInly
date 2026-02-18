import type { Metadata } from "next";
import "./globals.css";
import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";
import { Navbar, Footer } from "@/components/layout";
import { containerClasses } from "@/lib/ui-classes";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Lingo Events",
  description:
    "Discover events on the map. Multilingual events and community platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale)}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; } window.scrollTo(0, 0);`,
            }}
          />
        </head>
        <body className="relative font-sans antialiased flex flex-col min-h-screen">
          <Navbar />
          <div className={clsx(containerClasses, "flex flex-1 flex-col")}>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </LingoProvider>
  );
}
