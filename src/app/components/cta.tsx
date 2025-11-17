'use client'

import { Download, ArrowRight, Smartphone, Users } from 'lucide-react'
import { useState } from 'react'

type Language = 'fr' | 'en'

const translations = {
  fr: {
    title: 'Commencez à partager',
    subtitle: 'ShareWay est disponible sur Android. Téléchargez l\'application et rejoignez notre communauté dès maintenant.',
    passengerApp: 'ShareWay - Passager',
    passengerDesc: 'Trouvez des trajets, économisez sur vos trajets quotidiens',
    driverApp: 'ShareWay Pro - Conducteur',
    driverDesc: 'Gagnez de l\'argent en partageant vos trajets',
    downloadPassenger: 'Télécharger Passager',
    downloadDriver: 'Télécharger Conducteur',
    comingSoon: 'iOS bientôt disponible',
    questions: 'Des questions?',
    contact: 'Contactez-nous',
    downloads: 'Téléchargements',
  },
  en: {
    title: 'Start sharing your rides',
    subtitle: 'ShareWay is available on Android. Download the app and join our community today.',
    passengerApp: 'ShareWay - Passenger',
    passengerDesc: 'Find rides and save on your daily commute',
    driverApp: 'ShareWay Pro - Driver',
    driverDesc: 'Earn money by sharing your rides',
    downloadPassenger: 'Download Passenger',
    downloadDriver: 'Download Driver',
    comingSoon: 'iOS coming soon',
    questions: 'Questions?',
    contact: 'Get in touch',
    downloads: 'Downloads',
  }
}

export function CTA() {
  const [language, setLanguage] = useState<Language>('fr')
  const t = translations[language]

  return (
    <section id="download" className="relative py-24 px-4 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
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
        </div>

        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Passenger Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/70 backdrop-blur-2xl rounded-2xl border border-cyan-500/30 p-8 h-full flex flex-col justify-between hover:border-cyan-500/60 transition-all">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <Smartphone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.passengerApp}</h3>
                  <p className="text-slate-400">{t.passengerDesc}</p>
                </div>
              </div>
              <a
                href="https://wetransfer.com/downloads/1292dd9fddbcaf54d09edf2aff28750920251117002410/97775a32dbeb3ee91bb0a56ca4aca92a20251117002439/1695a9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-105"
              >
                <Download size={20} />
                <span>{t.downloadPassenger}</span>
              </a>
            </div>
          </div>

          {/* Driver Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/70 backdrop-blur-2xl rounded-2xl border border-teal-500/30 p-8 h-full flex flex-col justify-between hover:border-teal-500/60 transition-all">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.driverApp}</h3>
                  <p className="text-slate-400">{t.driverDesc}</p>
                </div>
              </div>
              <a
                href="https://wetransfer.com/downloads/1292dd9fddbcaf54d09edf2aff28750920251117002410/de0998406a37513b026798b09f1c7a2020251117002439/8c5978"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 group-hover:scale-105"
              >
                <Download size={20} />
                <span>{t.downloadDriver}</span>
              </a>
            </div>
          </div>
        </div>

        {/* iOS Coming Soon */}
        <div className="text-center border-t border-slate-700 pt-12 space-y-4">
          <p className="text-slate-400 text-lg">{t.comingSoon}</p>
          <a
            href="mailto:contact@shareway.app"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            {t.questions} {t.contact}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
