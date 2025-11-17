import { Car, Users, Lock, MapPin, Zap, TrendingDown } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Connectez-vous facilement',
    description: 'Trouvez des conducteurs et passagers pour vos trajets réguliers.',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: TrendingDown,
    title: 'Réduisez vos frais',
    description: 'Partagez les frais de carburant et réduisez vos dépenses de transport.',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'Écologique',
    description: 'Moins de voitures sur la route, moins d\'émissions de CO2.',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    icon: Lock,
    title: 'Sécurisé',
    description: 'Tous les utilisateurs sont vérifiés pour votre tranquillité.',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: MapPin,
    title: 'Trajets flexibles',
    description: 'Proposez ou trouvez des trajets selon votre emploi du temps.',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Car,
    title: 'Pour tous les besoins',
    description: 'Une plateforme pour conducteurs et passagers.',
    gradient: 'from-cyan-400 to-teal-500'
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:py-32 lg:py-40 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Pourquoi choisir ShareWay?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une plateforme conçue pour les étudiants et les navetteurs modernes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
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
