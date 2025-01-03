"use client";

import React, { useEffect, useState } from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Vérifie si le composant s'exécute côté client
    setIsClient(true);
  }, []);
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Mots aimables de
        <span className="text-purple"> clients satisfaits</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-16 w-10" // Ajuste la taille des images
                />
                <h3 className="text-white text-sm md:text-base">
                  {company.name}
                </h3>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
