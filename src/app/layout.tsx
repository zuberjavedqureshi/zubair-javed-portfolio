import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { themeInitScript } from "@/components/ThemeToggle";
import { profile, site } from "@/data/profile";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${profile.name}`,
  },
  description: site.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  keywords: [
    "Zubair Javed Qureshi",
    "Flutter developer",
    "Flutter developer Mumbai",
    "Mobile application developer",
    "Dart",
    "Riverpod",
    "Android developer",
    "Flutter AI",
    "Text Toolkit",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
    firstName: "Zubair",
    lastName: "Qureshi",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0c" },
    { media: "(prefers-color-scheme: light)", color: "#f3f1eb" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.name,
      jobTitle: "Flutter Developer",
      description: profile.intro,
      url: site.url,
      address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
      worksFor: { "@type": "Organization", name: "Xpresion Next" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "RD National College, University of Mumbai",
      },
      knowsAbout: ["Flutter", "Dart", "Android", "Cross-platform development", "Riverpod", "REST APIs", "Mobile application development"],
      sameAs: [profile.links.linkedin, profile.links.github],
    },
    {
      "@type": "MobileApplication",
      name: "Text Toolkit",
      operatingSystem: "Android",
      datePublished: "2026",
      applicationCategory: "UtilitiesApplication",
      installUrl: "https://play.google.com/store/apps/details?id=com.zedroidlabs.texttoolkit",
      author: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: profile.name,
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          {/* Without JS, scroll-reveal content must still be visible */}
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="grain min-h-dvh">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
