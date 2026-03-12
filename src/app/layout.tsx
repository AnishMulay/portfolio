import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anish Mulay",
  description: "Systems engineer. Linux kernel contributor. Building Sandstore.",
  openGraph: {
    title: "Anish Mulay",
    description: "Systems engineer. Linux kernel contributor. Building Sandstore.",
    url: "https://anishmulay.dev",
    siteName: "Anish Mulay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased selection:bg-accent selection:text-white`}>
        {/* Mobile top bar (shown below 768px, hidden above) */}
        <div className="md:hidden">
          {/* Note: In a full responsive implementation, the top bar would go here. 
              The Sidebar client component hides itself on mobile. We'll add the mobile topnav directly inside Sidebar.tsx for sharing state, or here. 
              Wait, the spec says "Below 768px viewport width: hide the fixed sidebar. Render a simple top navigation bar instead". Let's put it in Sidebar component to keep layout clean. */}
        </div>

        {/* Global Layout */}
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 md:ml-[380px]">
            {/* The spec says: Content starts at left offset 340px from viewport edge
                Sidebar is 260px width. Left margin is 260px.
                If content starts at 340px, the padding-left or margin-left of the inner container needs to be 340 - 260 = 80px on desktop.
            */}
            <div className="md:pl-[80px] pt-[88px] pb-[80px] px-6 md:px-0">
              <div className="max-w-[600px] w-full mx-auto md:mx-0">
                {children}

                {/* Footer rendered inside right content area */}
                <hr className="border-t border-border mt-[80px]" />
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
