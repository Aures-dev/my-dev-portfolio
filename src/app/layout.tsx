import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurès AZ. Portfolio",
  description: "Développeur Web Fullstack | Portfolio personnel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <BackToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
