// Arrow.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const Arrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Cette fonction vérifie la position de défilement pour afficher ou masquer la flèche
  const checkScroll = () => {
    if (!showArrow && window.pageYOffset > 100) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 100) {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    // Ajoutez l'écouteur d'événement lorsque le composant est monté
    window.addEventListener('scroll', checkScroll);
    // Nettoyez l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [showArrow]);

  // Cette fonction sera appelée lorsque l'utilisateur cliquera sur la flèche
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Le bouton est rendu seulement si showArrow est true
  return showArrow ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-slate-300 text-white p-2 rounded-full transition duration-300"
      aria-label="Retour en haut"
    >
      <FaArrowCircleUp size={30} />
    </button>
  ) : null;
};

export default Arrow;
