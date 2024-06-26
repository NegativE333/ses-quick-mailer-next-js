import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MobileHeader } from "@/components/sidebar/mobile-header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SES QuickMailer",
  description: "Mass Mailing service using AWS SES.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MobileHeader />
          <Sidebar className="hidden lg:flex" />
          <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="h-full max-w-[1056px]mx-auto pt-6">
              <Toaster />
              {/* <Modals /> */}
              {children}
            </div>
          </main>
      </body>
    </html>
  );
}
