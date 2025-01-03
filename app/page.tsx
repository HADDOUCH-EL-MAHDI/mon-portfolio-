"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Importation dynamique des composants avec désactivation explicite du SSR
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
});
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Barre de navigation flottante */}
        <FloatingNav navItems={navItems} />
        {/* Section Héros */}
        <Hero />
        {/* Section Grille */}
        <Grid />
        {/* Projets récents */}
        <RecentProjects />
        {/* Clients */}
        <Clients />
        {/* Expérience */}
        <Experience />
        {/* Approche */}
        <Approach />
        {/* Pied de page */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
