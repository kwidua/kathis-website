export const content = {
hero: {
    en: {
        title1: "Hi. I'm ",
        title2: "Softwareengineer",
        text: "8 years of experience in PHP/Symfony. Currently I'm deepening my expertise in React and modern frontend architecture.",
    },
    de: {
        title1: "Hallo. Ich bin ",
        title2: "Softwareentwicklerin",
        text: "8 Jahre Erfahrung in PHP/Symfony. Aktuell vertiefe ich meine Expertise in React und moderner Frontend-Architektur.",
    }
},

skills: {
    technical: [
        {
            title: 'PHP', 
            percentage: 75,
            icon: 'fa-brands fa-php fa-2xl'
        },
        {
            title: 'Symfony', 
            percentage: 80,
            icon: 'fa-brands fa-symfony fa-2xl'
        },
        {
            title: 'JavaScript', 
            percentage: 50,
            icon: 'fa-brands fa-js fa-xl'
        },
        {
            title: 'React', 
            percentage: 30,
            icon: 'fa-brands fa-react fa-2xl'
        },
    ],
     tools: [
            {
                title: 'Github',
                percentage: 80,
                icon: 'fa-brands fa-github fa-2xl'
            }
    ],
    languages: [
            {
                title: 'German',
                percentage: 99
            },
            {
                title: 'English',
                percentage: 90
            },
            {
                title: 'Bulgarian',
                percentage: 80
            },
            {
                title: 'Spanish',
                percentage: 30
            },
    ]
},

counter: {
    items: [
        {
            title: 'Länder besucht', 
            count: 18
        },
         {
            title: 'Kaffees getrunken', 
            count: 1953
        },
         {
            title: 'Bücher gelesen', 
            count: 256
        },

    ]
},

lebenslauf: {
    en: {
        title: 'Curriculum Vitae',
        steps: [
            {
                date: 'Feb 2026',
                title: 'Advanced training at Syntax',
                subtitle: 'Frontend mit React'
            },
            {
                date: 'Mai 2021',
                title: 'Bachelor of Science',
                subtitle: 'Computer Science, Hochschule Bonn-Rhein-Sieg'
            },
            {
                date: 'Okt 2020',
                title: 'Softwareengineer Backend',
                subtitle: 'Tideways GmbH'
            },
            {
                date: 'Aug 2018',
                title: 'Year abroad',
                subtitle: 'Toronto, Kanada'
            },
            {
                date: 'Okt 2016',
                title: 'Working Student Web Development',
                subtitle: 'Tideways GmbH'
            },
        ],
    },
    de: {
        title: 'Lebenslauf',
        steps: [
                    {
                    date: 'Feb 2026',
                    title: 'Weiterbildung Syntax',
                    subtitle: 'Frontend mit React'
                },
                {
                    date: 'Mai 2021',
                    title: 'Bachelor of Science',
                    subtitle: 'Informatik, Hochschule Bonn-Rhein-Sieg'
                },
                {
                    date: 'Okt 2020',
                    title: 'Softwareengineer Backend',
                    subtitle: 'Tideways GmbH'
                },
                {
                    date: 'Aug 2018',
                    title: 'Auslandssemester',
                    subtitle: 'Toronto, Kanada'
                },
                {
                    date: 'Okt 2016',
                    title: 'Werkstudent Webentwicklung',
                    subtitle: 'Tideways GmbH'
                },
            ]  
    }
},

projects: {
    de: {

    },
    en: {

    },
    best: [
        {
            title: 'Eigene Website',
            subtext: 'Developer Website mit React & Typescript',
            link: 'https://github.com/kwidua/kathis-website',
            date: '2025-02-01',
            details: "Im Rahmen der Syntax"
        },
        {
            title: 'Mandrake',
            subtext: 'Kleine Web App zum pflegen von Pflanzen',
            link: 'https://github.com/kwidua/mandrake',
            date: '2023-09-10',
        },
    ],
    other: [
        {
            title: 'Bachelorarbeit',
            subtext: 'Vorteile von High-Level-Protokollen gegenüber WebSocket, veranschaulicht am Beispiel von Mercure',
            link: 'https://github.com/kwidua/bachelorarbeit',
            date: '2020-05-07',
        }
    ]
},

contact: {
    de: {
        title: 'Kontakt',
        subtitle: 'Lass reden!',
        text: 'Schreib mir eine Email, oder über Social Media.'
    },
    en: {
        title: 'Contact',
        subtext: "Let's talk!",
        text: 'You can write me an email or find me on social media.'
    }
},

about: {
    de: {
        title: 'Über Mich',
        description: 'Lerne mich besser kennen - meinen Weg, meine Leidenschaften und was mich als Software Engineer antreibt.',
        journey: {
            title: 'Mein Weg',
            p1: 'Hallo! Ich bin Kathi, eine leidenschaftliche Softwareentwicklerin mit 8 Jahren Erfahrung in der Entwicklung...',
            p2: 'Im Laufe der Jahre habe ich mich auf PHP und das Symfony-Framework spezialisiert..'
        },
        love: {
            title: 'Was ich liebe',
            p1: 'Wenn ich nicht programmiere, findest du mich dabei,'
        },
        experience: {
            title: 'Erfahrung',
            description: '8+ Jahre professionelle Software-Entwicklung'
        },
        education: {
            title: 'Bildung',
            description: 'Bachelor of Science in Informatik (2021) und Weiterbildung bei Syntax im Bereich Frontend Development'
        },
        work: {
            title: 'Arbeitsstil',
            description: 'Ich liebe Pai Programming, voneinander lernt man am besten'
        },
        fun: {
            title: 'Fun Fact',
            description: ' '
        },
        personal: {
            title: 'Leben außerhalb des Codes ',
            pets: {
                title: "Meine Mitbewohner",
                description: 'Das sind meine tierischen Mitbewohner – meine zwei Katzen, treue Debugging-Helfer (auch wenn sie am liebsten mitten auf der Tastatur liegen). Und meine zwei Schildkröten, die ich gerne in meinem Garten beobachte. Sie erinnern mich daran, zwischendurch innezuhalten und das Leben zu genießen.'
            },
            garden: {}
        }
    },
    en: {
        title: 'About Me',
        description: 'Get to know me better - my journey, passions, and what drives me as a software engineer.',
        journey: {
            title: 'My Journey',
            p1: "Hi there! I'm Kathi, a passionate software engineer with 8 years of experience building",
            p2: "Over the years, I've specialized in PHP and the Symfony framework",
        },
        love: {
            title: 'What I Love',
            p1: "When I'm not coding, you can find me e"
        },
          experience: {
            title: 'Experience',
            description: '8+ years of professional software development'
        },
        education: {
            title: 'Education',
            description: ''
        },
        work: {
            title: '',
            description: ''
        },
        fun: {
            title: 'Fun Fact',
            description: ''
        },
        personal: {
            title: "Life Outside of Code",
            pets: {
                title: "My Companions",
                description: 'Meet my companions – my two cats, excellent debugging partners (even if they prefer sitting on my keyboard). And my two turtles, whom I love watching in the garden. They remind me to take breaks and enjoy the little moments in life.'
            },
            garden: {},
        }
    }
}
}