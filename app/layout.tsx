import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { TenantProvider } from "@/contexts/TenantContext";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HOME_META, SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_META.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-foreground bg-background font-sans flex flex-col min-h-screen">
        <AuthProvider>
          <TenantProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </TenantProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
