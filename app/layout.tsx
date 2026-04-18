import type { Metadata, Viewport } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { TenantProvider } from "@/contexts/TenantContext";

const fontUi = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const fontDisplay = Epilogue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Healthy Minds Restaurant | The Editorial Harvest",
  description:
    "Healthy Minds Restaurant — chef-crafted meals, bold flavors, and plans that fit real life. Fresh ingredients, balanced plates, your way.",
  icons: {
    icon: "/Nutrichef_Icon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontUi.variable} ${fontDisplay.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`${fontUi.className} hm-page-bg flex min-h-screen flex-col antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          <TenantProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </TenantProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
