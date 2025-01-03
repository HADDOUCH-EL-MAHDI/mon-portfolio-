"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] relative" id="contact">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt(e) à faire passer <span className="text-purple">votre</span>{" "}
          présence numérique au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès maintenant et discutons ensemble de la manière
          dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:haddouchelmahdi@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bas de page */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 HADDOUCH EL MAHDI
        </p>

        {/* Icônes des réseaux sociaux */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt={`Icône ${info.img}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
