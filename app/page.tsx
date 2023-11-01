



export default function Home() {
  return (
    <>
<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black mt-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Découvrez Nos Solutions Uniques
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Nos solutions sont conçues pour augmenter votre productivité et optimiser votre flux de travail.
              </p>
            </div>
            <div className="w-full max-w-full space-y-2 mx-auto">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Matériel de Qualité</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Nos produits sont sélectionnés pour leur durabilité et leur fiabilité.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Intégration Facile</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Intégrez facilement nos solutions à vos projets existants sans complications.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Personnalisation Avancée</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Adaptez les produits à vos besoins spécifiques pour un rendement optimal.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Recherche Puissante</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Trouvez rapidement les produits ou les informations dont vous avez besoin.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Sécurité Fiable</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Avec notre engagement envers la sécurité, vos installations seront toujours sécurisées.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-white">Collaboration Facile</h2>
                  <p className="text-zinc-200 dark:text-zinc-100">
                    Collaborez en temps réel avec votre équipe pour des projets plus efficaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}
