'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BarChart3, Users, TrendingUp, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    // Check if admin is authenticated
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (loading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Chargement...</div>
    </div>
  }

  if (!isAuthenticated) {
    return null
  }

  const stats = [
    { label: 'Utilisateurs actifs', value: '10,234', icon: Users, color: 'from-cyan-500 to-teal-500' },
    { label: 'Trajets ce mois', value: '4,521', icon: TrendingUp, color: 'from-teal-500 to-cyan-600' },
    { label: 'Revenus', value: '€25,430', icon: BarChart3, color: 'from-cyan-400 to-teal-500' },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500"></div>
            <span className="font-bold text-white">ShareWay</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition">
            Utilisateurs
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition">
            Trajets
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition">
            Signalements
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition">
            Paramètres
          </a>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition border border-red-500/30 font-semibold"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 p-4 md:p-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-slate-400 hover:text-white transition"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-white">Tableau de bord</h1>
          </div>
          <div className="text-sm text-slate-400">
            Admin Panel
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 p-6 space-y-4 hover:border-slate-600 transition">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Charts Area */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
            <h2 className="text-xl font-bold text-white mb-6">Activité récente</h2>
            <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
              <p>Graphique des trajets (À implémenter)</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
            <h2 className="text-xl font-bold text-white mb-6">Trajets récents</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
                  <div>
                    <p className="font-semibold text-white">Trajet #{1000 + i}</p>
                    <p className="text-sm text-slate-400">Lyon → Paris • 2h30</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">Complété</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
