import { Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500"></div>
              <span className="font-bold text-slate-900">ShareWay</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connecter les conducteurs et passagers pour un covoiturage intelligent et écologique.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Produit</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-cyan-600 transition">Fonctionnalités</a></li>
              <li><a href="#security" className="hover:text-cyan-600 transition">Sécurité</a></li>
              <li><a href="#story" className="hover:text-cyan-600 transition">Notre histoire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Compagnie</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-cyan-600 transition">À propos</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Légal</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-cyan-600 transition">Confidentialité</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition">Conditions</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Admin</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><Link href="/admin/login" className="hover:text-cyan-600 transition">Connexion Admin</Link></li>
              <li><a href="#" className="hover:text-cyan-600 transition">Dashboard</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 flex items-center gap-1.5">
              Fait avec <Heart size={16} className="text-cyan-500 fill-cyan-500" /> par l&apos;équipe ShareWay
            </p>
            <p className="text-sm text-slate-600">
              © {currentYear} ShareWay. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
