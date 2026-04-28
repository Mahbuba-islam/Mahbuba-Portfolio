import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mahbuba.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mahbuba Akter — Junior Full Stack Web Developer",
    template: "%s · Mahbuba Akter",
  },
  description:
    "Portfolio of Mahbuba Akter — Junior Full Stack Web Developer based in New York. Building modern, scalable, real-time web applications.",
  keywords: [
    "Mahbuba Akter",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Internship",
    "New York",
  ],
  authors: [{ name: "Mahbuba Akter" }],
  creator: "Mahbuba Akter",
  openGraph: {
    type: "website",
    title: "Mahbuba Akter — Junior Full Stack Web Developer",
    description:
      "Building modern, scalable, real-time web applications with Next.js, Node.js, and Prisma.",
    url: SITE_URL,
    siteName: "Mahbuba Akter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahbuba Akter — Junior Full Stack Web Developer",
    description:
      "Building modern, scalable, real-time web applications with Next.js, Node.js, and Prisma.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

