'use client'

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Головна', href: '#home' },
    { name: 'Послуги', href: '#services' },
    { name: 'Автопарк', href: '#transport' },
    { name: 'Переваги', href: '#guarantees' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md px-16" data-name="header" data-file="components/Header.js">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[var(--primary)] rounded-md flex items-center justify-center">
                <div className="icon-truck text-white text-2xl"></div>
            </div>
            <span className="text-2xl font-bold text-[var(--dark)] tracking-tighter group-hover:text-[var(--primary)] transition-colors">
              TurboHaul
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary px-5 py-2">
              Залишити заявку
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 text-slate-600 hover:text-[var(--primary)]"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full text-center">
              Залишити заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header