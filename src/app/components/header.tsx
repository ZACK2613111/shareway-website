'use client'

import { Menu, X, LogIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">ShareWay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 md:flex">
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

          {/* Admin Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/login" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              <LogIn size={16} />
              Admin
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden space-y-3">
            <a href="#features" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Fonctionnalités
            </a>
            <a href="#story" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Notre Histoire
            </a>
            <a href="#security" className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition">
              Sécurité
            </a>
            <Link href="/admin/login" className="block px-4 py-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition">
              Admin
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
