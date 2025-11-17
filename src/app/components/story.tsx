import { Building2, Lightbulb, Users } from 'lucide-react'

export function Story() {
  return (
    <section id="story" className="py-24 px-4 sm:py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left: Story Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Comment ShareWay est né
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Notre fondateur était étudiant à l&apos;Université Claude Bernard de Lyon. Chaque jour, il observait des milliers d&apos;étudiants prendre le bus, le tram ou le métro pour des trajets longs et coûteux.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Il a remarqué que beaucoup d&apos;étudiants possédaient une voiture et se déplaçaient régulièrement avec de nombreuses places vides. C&apos;est à ce moment qu&apos;une idée brillante a émergé : pourquoi ne pas créer une plateforme pour connecter ces conducteurs avec les passagers?
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              ShareWay était né. Une application simple, efficace et écologique pour transformer la façon dont les gens se déplacent ensemble.
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                  <Building2 size={28} />
                </div>
                <div className="h-24 w-1 bg-gradient-to-b from-cyan-500 to-teal-500 mt-3 mb-3"></div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-lg text-slate-900">Observation</h3>
                <p className="text-slate-600 mt-1">Identifier le problème de transport étudiant</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <Lightbulb size={28} />
                </div>
                <div className="h-24 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 mt-3 mb-3"></div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-lg text-slate-900">Innovation</h3>
                <p className="text-slate-600 mt-1">Créer une plateforme de covoiturage communautaire</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white shadow-lg">
                  <Users size={28} />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-lg text-slate-900">Communauté</h3>
                <p className="text-slate-600 mt-1">Impacter des milliers de vies quotidiennement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
