'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Assurez-vous que ce composant est bien implémenté

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulez le chargement des données par exemple avec un effet
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Terminez le chargement après un délai
    }, 1000); // Définissez le délai souhaité pour le chargement

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Affichez votre composant de chargement ici
  }

  // Définissez les variantes d'animation pour le texte et l'image comme avant
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="w-full pt-12 md:pt-24 lg:pt-32"
      >
        <div className="container space-y-10 xl:space-y-16">
          <motion.div
            variants={textAnimation}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Bienvenue cher Electronex
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Offrir à votre entreprise des services et des solutions de haute qualité.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300">
                  Nos services
                
              </Link>
            </div>
          </motion.div>
          <motion.img
            variants={imageAnimation}
            transition={{ duration: 1.2 }}
            alt="Company Banner"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center"
            height="300"
            src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="1200"
          />
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
