import React, { useState } from 'react';
// ...existing code...

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <header className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="https://placehold.co/50x50" alt="Logo" className="h-10 w-10" />
          <span className="ml-2 text-xl font-bold">RLappy</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-500">Catalog</a>
          <a href="#" className="text-gray-700 hover:text-green-500">About Us</a>
          <a href="#" className="text-gray-700 hover:text-green-500">Contact Us</a>
        </nav>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <a href="#" className="text-gray-700 hover:text-green-500">Dashboard</a>