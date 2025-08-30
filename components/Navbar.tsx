"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between p-4 shadow-md bg-white">
      <div className="flex items-center space-x-2">
        <Sparkles className="w-6 h-6 text-blue-500" />
        <span className="font-bold text-lg">PrimeEdge</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`${
              pathname === item.href ? "text-blue-500 font-semibold" : "text-gray-700"
            } hover:text-blue-500`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathname === item.href ? "text-blue-500 font-semibold" : "text-gray-700"
              } hover:text-blue-500`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
