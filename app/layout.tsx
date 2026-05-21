import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Beloved Promise Events | Faith-Based Event Decorating · DMV",
  description:
    "Beloved Promise Events is a faith-rooted luxury event decorating company based in the DMV. We bring your vision to life — exactly as you imagined, if not better. His promises never fail.",
  keywords: [
    "event decorating",
    "event planner DMV",
    "faith-based event planner",
    "luxury event decor Washington DC",
    "balloon decor Maryland",
    "wedding decor Virginia",
    "Christian event planner",
    "beloved promise events",
    "Amyah",
    "event styling DMV",
  ],
  openGraph: {
    title: "Beloved Promise Events",
    description: "Your Vision. His Promise. Delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GrainOverlay />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
