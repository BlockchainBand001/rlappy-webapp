"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  isLoggedIn: boolean;
}

export const Navbar = ({ isLoggedIn }: NavbarProps) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="RLappy Logo" width={40} height={40} />
          <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            RLappy
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {isLoggedIn ? (
            <div className="flex space-x-4">
              <Link href="/dashboard" className="btn-primary">Dashboard</Link>
              <button className="btn-secondary">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="btn-primary">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
