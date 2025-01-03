import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Vérifie si le composant s'exécute côté client
    setIsClient(true);
  }, []);

  return (
    <div className="pb-20 pt-36 relative">
      {/* Image circulaire en haut à droite */}
      {isClient && (
        <div className="absolute top-4 right-4 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src="/Image_HADDOUCH_EL_Mahdi.jpg" // Assurez-vous que ce chemin est correct
            alt="HADDOUCH El Mahdi"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Spotlights */}
      {isClient && (
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      )}

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Effet de texte généré */}
          <TextGenerateEffect
            words="Welcome to my web site"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <br />
          <br />
          {/* Introduction */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Bonjour ! Je m&apos;appelle HADDOUCH El Mahdi, développeur
            full-stack, lauréat de ENSA Oujda 2024.
          </p>

          {/* Bouton magique */}
          <a href="#about">
            <MagicButton
              title="Voir mes travaux"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
