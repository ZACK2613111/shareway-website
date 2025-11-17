'use client'

import { Menu, X, LogIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 hover:opacity-80 transition flex-shrink-0">
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg flex-shrink-0"></div>
            <span className="hidden sm:inline text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent whitespace-nowrap">ShareWay</span>
            <span className="sm:hidden text-lg font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">SW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Fonctionnalités
            </a>
            <a href="#story" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Notre Histoire
            </a>
            <a href="#security" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Sécurité
            </a>
          </div>

          {/* Admin Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link 
              href="/admin/login" 
              className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border-2 border-cyan-500 text-xs md:text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition-all"
            >
              <LogIn size={16} />
              <span className="hidden md:inline">Admin</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            {/* Overlay backdrop */}
            <div 
              className="fixed inset-0 top-[60px] md:top-[72px] bg-black/50 lg:hidden"
              onClick={closeMenu}
            />
            {/* Mobile menu panel - full screen */}
            <div className="fixed top-[60px] md:top-[72px] left-0 right-0 bottom-0 bg-white lg:hidden overflow-y-auto">
              <div className="px-4 py-6 space-y-3 flex flex-col">
                {/* Navigation links */}
                <a 
                  href="#features" 
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition"
                >
                  Fonctionnalités
                </a>
                <a 
                  href="#story" 
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition"
                >
                  Notre Histoire
                </a>
                <a 
                  href="#security" 
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition"
                >
                  Sécurité
                </a>
                
                {/* Divider */}
                <div className="my-2 border-t border-slate-200"></div>
                
                {/* Admin link in mobile menu */}
                <Link 
                  href="/admin/login" 
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-semibold text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-xl transition sm:hidden"
                >
                  Admin Login
                </Link>

                {/* Download buttons section */}
                <div className="my-4 space-y-3">
                  <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Télécharger l'application</p>
                  <a 
                    href="https://wetransfer.com/downloads/1292dd9fddbcaf54d09edf2aff28750920251117002410/97775a32dbeb3ee91bb0a56ca4aca92a20251117002439/1695a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition text-center"
                  >
                    ShareWay (Passager)
                  </a>
                  <a 
                    href="https://wetransfer.com/downloads/1292dd9fddbcaf54d09edf2aff28750920251117002410/de0998406a37513b026798b09f1c7a2020251117002439/8c5978"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-semibold border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition text-center"
                  >
                    ShareWay Pro (Chauffeur)
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
