import { ShieldCheck, FileCheck, Eye, AlertCircle } from 'lucide-react'

const securityFeatures = [
  {
    icon: FileCheck,
    title: 'Vérification de documents',
    description: 'Tous les conducteurs et passagers doivent fournir des documents vérifiés.'
  },
  {
    icon: ShieldCheck,
    title: 'Contrôle d\'identité',
    description: 'Identification complète pour garantir la confiance entre utilisateurs.'
  },
  {
    icon: Eye,
    title: 'Évaluations et avis',
    description: 'Système d\'évaluation transparent pour évaluer les conducteurs et passagers.'
  },
  {
    icon: AlertCircle,
    title: 'Support 24/7',
    description: 'Équipe d\'assistance disponible pour résoudre tout problème.'
  },
]

export function Security() {
  return (
    <section id="security" className="py-24 px-4 sm:py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Votre sécurité, notre priorité
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des mesures strictes pour protéger tous les utilisateurs de ShareWay
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                  <Icon size={24} className="text-cyan-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
