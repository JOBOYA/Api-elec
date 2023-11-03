import { motion } from 'framer-motion';

export default function Footer() {
  // Définissez les variantes d'animation pour le footer
  const footerAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

    return (
        <motion.section
        initial="hidden"
        animate="visible"
        variants={footerAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-10 flex items-center justify-center bg-gray-800 text-white rounded-xl space-x-8"
      >
<section className="h-10 flex items-center justify-center bg-gray-800 text-white rounded-xl space-x-8">
            <a className="text-white hover:text-gray-400" href="#">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <span className="sr-only">Facebook</span>
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          <span className="sr-only">Twitter</span>
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="sr-only">Instagram</span>
        </a>
        <a className="text-white hover:text-gray-400" href="#">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect height="12" width="4" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
      </section>
        </motion.section>
    )
  }
  