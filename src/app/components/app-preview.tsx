import { Smartphone } from 'lucide-react'

export function AppPreview() {
  return (
    <section className="py-24 px-4 sm:py-32 lg:py-40 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Une app moderne et intuitive
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Conçue comme Revolut, simple et puissante
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-b from-slate-100 to-white p-8">
                <Smartphone size={200} className="mx-auto text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
