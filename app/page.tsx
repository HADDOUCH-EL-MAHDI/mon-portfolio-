"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Importation dynamique des composants
const Hero = dynamic(() => import("@/components/Hero"));
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav) // Correction de l'import
);
const Grid = dynamic(() => import("@/components/Grid"));
const Footer = dynamic(() => import("@/components/Footer"));
const Clients = dynamic(() => import("@/components/Clients"));
const Approach = dynamic(() => import("@/components/Approach"));
const Experience = dynamic(() => import("@/components/Experience"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Ajout des types corrects pour `FloatingNav` */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
