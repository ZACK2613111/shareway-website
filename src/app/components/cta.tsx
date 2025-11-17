import { Download, ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="download" className="py-24 px-4 sm:py-32 lg:py-40 bg-gradient-to-r from-cyan-50 via-teal-50 to-cyan-50">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Commencez à partager
          </h2>
          <p className="text-xl text-slate-600">
            ShareWay est disponible sur Android. Téléchargez l&apos;application et rejoignez notre communauté dès maintenant.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            <span>Télécharger sur Google Play</span>
          </a>
        </div>

        <div className="pt-12 border-t border-slate-200">
          <p className="text-slate-600 mb-3">iOS bientôt disponible</p>
          <a
            href="mailto:contact@shareway.app"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition"
          >
            Des questions? Contactez-nous
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
