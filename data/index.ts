export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je donne la priorité à la collaboration avec les clients, en favorisant une communication ouverte",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis très flexible avec les communications de fuseau horaire",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma pile technologique",
    description: "J'essaie constamment de m'améliorer",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie et passionné par le développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Je construis actuellement une bibliothèque d'animation JS",
    description: "Les Coulisses",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vous souhaitez démarrer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    titre: "Flo_Pro",
    title: "Plate-forme web Flo Pro",
    des: "Développement d’une plate-forme web pour automatiser les services médicaux.",
    img: "/p9.png",
    iconLists: [
      "/re.svg",
      "/spring.png",
      "/mui.svg",
      "/gitlab.png",
      "/swagger.png",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    titre: "RH_Management",
    title: "Plate-forme RH-Management",
    des: "Migration et extension d’une plateforme de gestion des processus RH vers une rchitecture basée sur des micro-services.",
    img: "/p2.png",
    iconLists: [
      "/next.svg",
      "/dock.svg",
      "/jira.svg",
      "/spring.png",
      "/mui.svg",
    ],
    link: "https://drive.google.com/file/d/1TRUJCVBD1vSFQqYnhVFKIGSTHi818RAv/view?usp=sharing",
  },
  {
    id: 3,
    titre: "QCSHIFT",
    title: "App web QCSHIFT",
    des: "Développement d'une application web pour gérer le workflow de vérification des composants en caoutchouc dans l'industrie automobile.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/spring.png", "jwt.png", "/github.svg", "/mui.svg"],
    link: "https://drive.google.com/file/d/1jsxjIzZyCHqfNmdgCAFb2sYZRjJG7Fzy/view?usp=sharing",
  },
  {
    id: 4,
    titre: "Pediatrie_APP",
    title: "App web Pediatrie-APP",
    des: "Développement d'une application web pour la digitalisation du service pédiatrie.",
    img: "/p4.png",
    iconLists: [
      "re.svg",
      "/mui.svg",
      "/spring.png",
      "/postman.svg",
      "/dock.svg",
    ],
    link: "https://drive.google.com/file/d/19MsZL1zhnDDX2Sassh334Qs6m4QKoeC_/view?usp=sharing",
  },
  {
    id: 5,
    titre: "Empowr",
    title: "App web Empower",
    des: "Développement d’une application web de gestion des employées.",
    img: "/p5.png",
    iconLists: [
      "/re.svg",
      "/bootstrap.png",
      "/php.png",
      "/mysql.jpg",
      "/github.svg",
    ],
    link: "/#",
  },
  {
    id: 6,
    titre: "App_memberCom",
    title: "Plate-forme web App-memberCom",
    des: "Plateforme qui permet l'intercommunication dans les entreprises.",
    img: "/p6.png",
    iconLists: ["/html.png", "/css.png", "/js.png", "/php.png", "/mysql.jpg"],
    link: "https://github.com/HADDOUCH-EL-MAHDI/App-memberCom",
  },
];

export const testimonials = [
  {
    quote:
      "Félicitations Ssi Mahdi pour la réussite de ton stage PFA. Je suis fier d’avoir été ton encadrant et d’avoir pu t’accompagner tout au long de ce stage. Je suis convaincu que tu auras un avenir brillant dans ta carrière. Continue à te surpasser ! 👏👏👏",
    name: "M.BOUSSAADAN Abderrahim",
    title: "Ingénieur Informatique",
    image: "/profile1.png",
  },
  {
    quote:
      "I had the pleasure of working with Mahdi on the Floweb project, and I can confidently say that he is a highly skilled developer with remarkable technical expertise. His ability to deliver high-quality solutions and tackle complex challenges is truly impressive. Beyond his technical skills, Mahdi stands out for his exceptional team spirit, adaptability, and strong work ethic. He is an asset to any team, demonstrating great values like professionalism, collaboration, and dedication. I wholeheartedly recommend working with Mahdi he has all the qualities of a brilliant and reliable teammate.",
    name: "JNAINI Abdellah",
    title: "Développeur AI",
    image: "/profile4.jpg",
  },
  {
    quote:
      "Travailler avec Mahdi a été une expérience enrichissante. C’est un développeur compétent, doté d’un sens aigu de l’innovation et d’une grande rigueur dans son travail.",
    name: "HAMMOUCH Elmehdi",
    title: "Développeur informatique",
    image: "/profile3.png",
  },
  {
    quote:
      "J'ai eu le grand plaisir de travailler avec toi durant ce stage. Ton professionnalisme, ton esprit d'équipe et ta rigueur m'ont vraiment impressionné, et j'ai beaucoup appris grâce à notre collaboration. Félicitations pour tout le travail accompli, et je te souhaite une excellente continuation dans tes projets professionnels et personnels. À bientôt, j'espère !",
    name: "JIED Mohammed",
    title: "Ingénieur logiciel",
    image: "/profile2.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "SII  group morocco",
    img: "/sii.png",
  },
  {
    id: 2,
    name: "Elastomer solutions",
    img: "/elastomer.png",
  },
  {
    id: 3,
    name: "Lambdasoft",
    img: "/lambdas.png",
  },
  {
    id: 4,
    name: "CHU Oujda",
    img: "/chu.png",
  },
  {
    id: 5,
    name: "ENSA Oujda",
    img: "/ensa.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Stage PFE : Février - Septembre 2024 chez SII Maroc, Oujda",
    desc: "Migration et extension d’une plateforme de gestion des processus RH vers une architecture basée sur des micro-services.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Stage: Juillet-Septembre 2023 Elastomer Solutions Tanger",
    desc: "Développement d'une application web pour gérer le workflow de vérification des composants en caoutchouc dans l’industrie automobile.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Stage PFA: Mars-Juillet 2023 au sein de CHU Oujda",
    desc: "Développement d'une application web pour la digitalisation du service pédiatrie",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Stage: Juillet-Septembre 2022 chez LAMBDASOFT Casablanca",
    desc: "Développement d’une application web de gestion des employées",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/cv.png",
    url: "https://drive.google.com/file/d/1bU1a6FsqBCUuRpDrFdCNDsxwKN8b7-DA/view?usp=sharing",
  },
  {
    id: 2,
    img: "/git.svg",
    url: "https://github.com/HADDOUCH-EL-MAHDI?tab=repositories",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/el-mahdi-haddouch-529309240/",
  },
];
