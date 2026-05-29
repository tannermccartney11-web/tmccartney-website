'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#C8A96E]">
            tanner.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-[#E8E4DF] hover:text-[#C8A96E] transition-colors text-sm">
              About
            </Link>
            <Link href="#content" className="text-[#E8E4DF] hover:text-[#C8A96E] transition-colors text-sm">
              Content
            </Link>
            <Link href="#audience" className="text-[#E8E4DF] hover:text-[#C8A96E] transition-colors text-sm">
              Audience
            </Link>
            <Link href="#partnership" className="text-[#E8E4DF] hover:text-[#C8A96E] transition-colors text-sm">
              Partnership
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:block px-6 py-2 bg-[#C8A96E] text-black font-semibold rounded hover:bg-[#dab896] transition-colors"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#E8E4DF] hover:text-[#C8A96E]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block text-[#E8E4DF] hover:text-[#C8A96E] py-2 text-sm">
              About
            </Link>
            <Link href="#content" className="block text-[#E8E4DF] hover:text-[#C8A96E] py-2 text-sm">
              Content
            </Link>
            <Link href="#audience" className="block text-[#E8E4DF] hover:text-[#C8A96E] py-2 text-sm">
              Audience
            </Link>
            <Link href="#partnership" className="block text-[#E8E4DF] hover:text-[#C8A96E] py-2 text-sm">
              Partnership
            </Link>
            <Link
              href="#contact"
              className="block w-full px-4 py-2 bg-[#C8A96E] text-black font-semibold rounded hover:bg-[#dab896] transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
