import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anish Mulay - Distributed Systems & OS Engineering",
  description: "Systems engineer focused on distributed storage and OS internals.",
};

const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} bg-white font-serif text-gray-900 antialiased`}
      >
        <div className="min-h-screen bg-white">
          <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-8 md:grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-0 md:px-12 md:py-12 lg:px-20">
            <aside className="md:sticky md:top-0 md:h-screen md:py-6">
              <nav aria-label="Primary" className="font-sans">
                <ul className="flex items-center gap-5 overflow-x-auto whitespace-nowrap pr-2 text-sm md:block md:space-y-3 md:overflow-visible md:pr-0">
                  {navItems.map((item) => (
                    <li key={item.href} className="shrink-0">
                      <Link
                        href={item.href}
                        className="text-gray-500 transition-colors hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <main className="min-w-0 pt-10 md:pt-6">
              <div className="max-w-2xl font-serif leading-relaxed md:pl-20 lg:pl-32">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
