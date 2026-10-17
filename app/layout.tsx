import type { Metadata, Viewport } from "next";
import { Epilogue, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppChrome } from "@/components/AppChrome";
import { HashScroll } from "@/components/HashScroll";
import { AuthProvider } from "@/contexts/AuthContext";
import { TenantProvider } from "@/contexts/TenantContext";

const SITE = "https://www.healthyminds.ae";
const TITLE = "Healthy Minds Restaurant | The Editorial Harvest";
const DESCRIPTION =
  "Healthy Minds Restaurant in the UAE. Chef-crafted meal plans for fat loss, muscle gain, and a balanced week. Fresh plates, clear macros, delivered to your door.";
const OG_IMAGE = "/hm-stories/hero-journey.jpg";

/** Public Google Ads tag from Priyansh. Lives in the document head of every page. */
const GOOGLE_ADS_ID = "AW-18465769763";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.match(
  /^G-[A-Z0-9]+$/,
)?.[0];

const googleTagIds = [GOOGLE_ADS_ID, ...(gaMeasurementId ? [gaMeasurementId] : [])];
const googleTagConfig = googleTagIds.map((id) => `gtag('config','${id}');`).join("");

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
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Healthy Minds Restaurant",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "Healthy Minds meal boxes with a customer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/healthy-minds-logo.png", type: "image/png" }],
    shortcut: "/healthy-minds-logo.png",
    apple: "/healthy-minds-logo.png",
  },
  verification: {
    google: "_xuIQSrwaq_QSqxCMOT29ttp6Dnsyk1lmes5dgrGcNk",
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-ads-gtag" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${googleTagConfig}`}
      </Script>
      <body
        className={`${fontUi.className} hm-page-bg flex min-h-screen flex-col antialiased bg-background text-foreground`}
      >
        <HashScroll />
        <AuthProvider>
          <TenantProvider>
            <AppChrome>{children}</AppChrome>
          </TenantProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
