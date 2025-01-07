"use client";
import React, { useState } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../app/globals.css'; // Ensure global styles are imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-colors duration-500">
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-grow bg-gradient-r-green-blue dark:bg-gradient-r-blue-lightblue transition-colors duration-500">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
