import { ArrowRight, Download, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-24 sm:py-32 lg:py-48">
      {/* Background decoration - subtle gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200">
            <Sparkles size={16} className="text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Rejoignez la communauté</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900">
            Partagez vos trajets,{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              économisez gros
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connectez-vous avec des conducteurs et passagers près de chez vous. Réduisez vos frais de transport et votre empreinte carbone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Download size={20} />
              Télécharger l'app
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-cyan-600 bg-white border-2 border-cyan-200 hover:bg-cyan-50 transition-all duration-300 text-lg"
            >
              En savoir plus
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-slate-200">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">10k+</div>
              <p className="text-sm text-slate-600">Utilisateurs actifs</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">50k+</div>
              <p className="text-sm text-slate-600">Trajets partagés</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">100%</div>
              <p className="text-sm text-slate-600">Vérifiés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
