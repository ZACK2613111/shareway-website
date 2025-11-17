'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, LogIn, Globe } from 'lucide-react'
import Link from 'next/link'

type Language = 'fr' | 'en'

const translations = {
  fr: {
    title: 'Espace Admin',
    subtitle: 'Connectez-vous pour gérer la plateforme ShareWay',
    email: 'Email',
    password: 'Mot de passe',
    emailPlaceholder: 'admin@shareway.app',
    passwordPlaceholder: '••••••••',
    loginButton: 'Se connecter',
    connecting: 'Connexion...',
    errorMessage: 'Email ou mot de passe incorrect',
    demoLabel: 'Identifiants de démo:',
    emailLabel: 'Email:',
    passLabel: 'Mot de passe:',
    backLink: '← Retour à l\'accueil',
    features: 'Fonctionnalités',
    story: 'Notre Histoire',
    security: 'Sécurité',
    download: 'Télécharger',
    admin: 'Admin',
  },
  en: {
    title: 'Admin Panel',
    subtitle: 'Sign in to manage the ShareWay platform',
    email: 'Email',
    password: 'Password',
    emailPlaceholder: 'admin@shareway.app',
    passwordPlaceholder: '••••••••',
    loginButton: 'Sign In',
    connecting: 'Signing in...',
    errorMessage: 'Incorrect email or password',
    demoLabel: 'Demo credentials:',
    emailLabel: 'Email:',
    passLabel: 'Password:',
    backLink: '← Back to home',
    features: 'Features',
    story: 'Our Story',
    security: 'Security',
    download: 'Download',
    admin: 'Admin',
  }
}

export default function AdminLogin() {
  const router = useRouter()
  const [language, setLanguage] = useState<Language>('fr')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (email === 'admin@shareway.app' && password === 'ShareWay123!') {
      localStorage.setItem('adminToken', 'token_' + Date.now())
      router.push('/admin/dashboard')
    } else {
      setError(t.errorMessage)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'fr' 
              ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' 
              : 'text-slate-300 hover:text-white'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en' 
              ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' 
              : 'text-slate-300 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-cyan-500/20 p-8 md:p-10 space-y-8">
          {/* Logo & Header */}
          <div className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center justify-center gap-3 group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg group-hover:shadow-cyan-500/50 transition-all transform group-hover:scale-110"></div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">ShareWay</span>
            </Link>
            <div className="space-y-2 pt-2">
              <h1 className="text-3xl font-bold text-white">{t.title}</h1>
              <p className="text-slate-400">{t.subtitle}</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">{t.email}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">{t.password}</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 backdrop-blur-sm">
                <p className="text-sm text-red-300 font-medium">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <LogIn size={20} className="group-hover:rotate-12 transition-transform" />
              {loading ? t.connecting : t.loginButton}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 backdrop-blur-sm space-y-3">
            <p className="text-xs font-semibold text-cyan-300">{t.demoLabel}</p>
            <div className="space-y-2">
              <p className="text-xs text-slate-300">{t.emailLabel} <code className="font-mono bg-slate-700/70 px-2 py-1 rounded text-cyan-300">admin@shareway.app</code></p>
              <p className="text-xs text-slate-300">{t.passLabel} <code className="font-mono bg-slate-700/70 px-2 py-1 rounded text-cyan-300">ShareWay123!</code></p>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link href="/" className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition inline-flex items-center gap-2 group">
              {t.backLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
