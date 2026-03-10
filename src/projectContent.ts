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

export const projectsDE: Project[] = [
    {
      id: 1,
      title: "Eigene Webseite",
      description:
        "Kleine Webb App zum pflegen von Pflanzen",
      technologies: ["React", "Typescript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800",
      github: "https://github.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mandrake",
      description:
        "Kleine Webb App zum pflegen von Pflanzen",
      technologies: ["PHP", "Symfony", "MySQL"],
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=800",
      github: "https://github.com",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Bachelorarbeit",
      description:
        "Vorteile von High-Level-Protokollen gegenüber WebSocket, veranschaulicht am Beispiel von Mercure.",
      technologies: ["PHP", "Symfony", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?q=80&w=800",
      github: "https://github.com",
      color: "from-indigo-500 to-purple-500",
    },
]

export const projectsEN: Project[] = [
    {
      id: 1,
      title: "Website",
      description:
        "Kleine Webb App zum pflegen von Pflanzen",
      technologies: ["React", "Typescript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800",
      github: "https://github.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mandrake",
      description:
        "Kleine Webb App zum pflegen von Pflanzen",
      technologies: ["PHP", "Symfony", "MySQL"],
      image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=800",
      github: "https://github.com",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Bachelor thesis",
      description:
        "Benefits of High-level Protocols over WebSocket exemplified by Mercure.",
      technologies: ["PHP", "Symfony", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?q=80&w=800",
      github: "https://github.com",
      color: "from-indigo-500 to-purple-500",
    },
]