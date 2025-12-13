import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getTopics } from '@/lib/content/topics';
import { MathTree } from '@/components/navigation/MathTree';
import { SearchBar } from '@/components/search/SearchBar';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Math Tree - Comprehensive Mathematics Grimoire",
  description: "Explore mathematics from basic arithmetic through Calculus 3 with clear explanations, examples, and interactive learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const topics = getTopics();

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 dark:lg:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex-1 overflow-y-auto">
              <MathTree topics={topics} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 lg:pl-64">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Math Tree
                    </span>
                  </Link>
                  <div className="flex-1 max-w-2xl">
                    <SearchBar />
                  </div>
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
          </div>
        </div>
        
        {/* Footer Attribution */}
        <footer className="fixed bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
          Created by K.E. MCKAI
        </footer>
      </body>
    </html>
  );
}
