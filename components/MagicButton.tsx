import React, { useEffect, useState } from "react";

/**
 * MagicButton Component
 * UI: Utilise des styles avancés de Tailwind CSS
 * Lien : https://ui.aceternity.com/components/tailwindcss-buttons
 *
 * Changements :
 * - Bords arrondis : `rounded-lg`
 * - Ajout de la marge supérieure : `md:mt-10`
 * - Suppression : `focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`
 * - Mise à jour des paddings et espacement : `px-5 gap-2`
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Vérifie si le composant s'exécute côté client
    setIsClient(true);
  }, []);
  return (
    <button
      // Classe principale pour le bouton
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Effet d'animation de bordure avec gradient */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Contenu du bouton */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {/* Positionnement de l'icône (à gauche ou à droite) */}
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
