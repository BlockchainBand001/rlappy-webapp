"use client";
import React, { useState } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-grow bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
