interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  color: string;
}

const thesisImage = '';
const mandrakeImage = '';
const websiteImage = '';



const projectsDE: Project[] = [
      {
      id: 4,
      title: "Garden Gnome",
      description:
        "Work in Progess. Abschlussprojekt der Weiterbildung 'Frontend Web-Entwicklung' bei Syntax. Eine kleine Web App, "+ 
        "die mittels API Pflanzendaten speichert und Empfehlungen über die Pflege ausgibt (bester Schnittzeitpunkt, Gießverhalten, etc.). Unter Berücksichtigung dieser Daten, sowie Wetterdaten (Frost, extreme Wärme) wird eine Todo-Liste erstellt",
      technologies: ["React", "Typescript",  "Tailwind CSS", "Firebase", "Shadcn"],
      image: "https://images.unsplash.com/photo-1528659432556-884cfe1480ef?q=80&w=800",
      github: "https://github.com/kwidua/garden-gnome",
      color: "from-indigo-500 to-pink-500",
    },
    {
      id: 3,
      title: "Eigene Webseite",
      description:
        "(Diese) Eigene Website mit React und Typescript im Rahmen der Weiterbildung 'Frontend Web-Entwicklung' bei Syntax.",
      technologies: ["React", "Typescript",  "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800",
      github: "https://github.com/kwidua/kathis-website",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mandrake",
      description:
        "Kleines Bastelprojekt - Eine Webb App zum pflegen von Zimmerpflanzen.",
      technologies: ["PHP", "Symfony", "MySQL", "Twig"],
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=800",
      github: "https://github.com/kwidua/mandrake",
      demo: "https://mumpitz.mandrake.club",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 1,
      title: "Bachelorarbeit",
      description:
        "Vorteile von High-Level-Protokollen gegenüber WebSocket, veranschaulicht am Beispiel von Mercure.",
      technologies: ["PHP", "Symfony", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?q=80&w=800",
      github: "https://github.com/kwidua/bachelorarbeit",
      color: "from-indigo-500 to-purple-500",
    },
]

const projectsEN: Project[] = [
      {
      id: 4,
      title: "Garden Gnome",
      description:
        "Work in progress. Final project of the advanced training course 'Frontend Web Development' at Syntax. A small web app that uses an API to store plant data and provides care recommendations (best time to prune, watering habits, etc.). Taking this data, as well as weather data (frost, extreme heat), into account, a to-do list is created. ",
      technologies: ["React", "Typescript",  "Tailwind CSS", "Firebase", "Shadcn"],
      image: "https://images.unsplash.com/photo-1528659432556-884cfe1480ef?q=80&w=800",
      github: "https://github.com/kwidua/garden-gnome",
      color: "from-indigo-500 to-pink-500",
    },
    {
      id: 3,
      title: "Website",
      description:
        "Work of Progress. This very website using React and Typescript as part of the 'Frontend Web Development' training course at Syntax.",
      technologies: ["React", "Typescript", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800",
      github: "https://github.com/kwidua/kathis-website",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mandrake",
      description:
        "Small project - a web app that helps taking care of your house plants.",
      technologies: ["PHP", "Symfony", "MySQL", "Twig"],
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=800",
      github: "https://github.com/kwidua/mandrake",
      demo: "https://mumpitz.mandrake.club",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 1,
      title: "Bachelor thesis",
      description:
        "Benefits of High-level Protocols over WebSocket exemplified by Mercure.",
      technologies: ["PHP", "Symfony", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?q=80&w=800",
      github: "https://github.com/kwidua/bachelorarbeit",
      color: "from-indigo-500 to-purple-500",
    },
]

export const projectPageData = {
  de: {
    title: "Meine ",
    title2: "Projekte",
    description: "Eine Auswahl von Projekten, an denen ich gearbeitet habe.",
    data: projectsDE
  },
  en: {
    title: "My ",
    title2: "Projects",
    description: "A selection of projects I've worked on.",
    data: projectsEN
  }
}