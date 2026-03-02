export const en = {
  hero: {
    greeting: "Hi, I'm",
    name: "JAD",
    typingWords: ["Front-end developer", "Communication engineer student"],
    description:
      "Front-End Developer crafting modern, efficient web interfaces with an engineering mindset from Communication Engineering, where performance, structure, and precision truly matter.",
    buttons: {
      contact: "Contact",
      resume: "My Resume",
    },
  },
  about: {
    cardTitle: "Engineering the Web",
    cardSubtitle:
      "I’m Jad, a Front-End Developer with a passion for turning complex ideas into seamless, interactive web experiences. My background in Communication Engineering gives me a unique perspective. I focus on clean, efficient, and well-structured code that not only works flawlessly but scales beautifully. I love exploring modern technologies, crafting intuitive interfaces, and continuously learning to push the boundaries of what the web can do.",
    smallCards: [
      { title: "Education", subtitle: "Comm. Engineering Student" },
      { title: "Focus", subtitle: "Next.js & React Architect" },
    ],
  },
  levitating: {
    headline: "I make responsive web apps",
    buttonText: "Contact Me",
  },
  skills: {
    programmingLanguages: "Programming Languages",
    frontendStack: "Frontend Stack",
    toolsDevOps: "Tools & DevOps",
  },
  projects: {
    uniway: {
      title: "UnyWay: Campus Marketplace Web Application",
      subTitle:
        "A student-focused platform offering shopping and various services for university students.",
      longSubTitle:
        "UniWay was a platform I co-founded with a friend, designed to provide university students with diverse services, including product shopping, store card top-ups, and more. It featured an admin dashboard with automation and a Telegram bot for admins. Future plans included adding mentoring, educational courses, and expanding services for freelancers. The project was unfortunately discontinued shortly after launch due to insufficient funding.",
    },
    akhlaq: {
      title: "Akhlaq - clothing manufacture",
      subTitle:
        "Akhlaq Garment – Freelance work for an Ethiopian clothing manufacturer",
      longSubTitle:
        "I worked as a freelancer for Akhlaq Garment, an Ethiopian clothing manufacturing company, contributing to their projects and supporting their digital needs.",
    },
    dashboard: {
      title: "Dashboard training project",
      subTitle:
        "Dashboard UI – A front-end training project built with Next.js & shadcn/ui",
      longSubTitle:
        "A multi-page dashboard interface built for practice, featuring a fully functional dark/light theme toggle, clean layout structure, and reusable components. Developed using Next.js, TypeScript, Tailwind CSS, and shadcn/ui publicly available on GitHub.",
    },
  },
  certificates: {
    reactBasics: {
      title: "Meta Front-End React Basics Certificate",
      subTitle: "Completed Meta Front-End Developer Professional Certificate",
      longSubTitle:
        "This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies.",
    },
    versionControl: {
      title: "Meta Front-End Version Control Certificate",
      subTitle: "Completed Meta Front-End Developer Professional Certificate",
      longSubTitle:
        "This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies.",
    },
    programmingJS: {
      title: "Meta Front-End Programming with JavaScript Certificate",
      subTitle: "Completed Meta Front-End Developer Professional Certificate",
      longSubTitle:
        "This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies.",
    },
    frontEndIntro: {
      title: "Meta Introduction to Front-End Development Certificate",
      subTitle: "Completed Meta Front-End Developer Professional Certificate",
      longSubTitle:
        "This certificate verifies that I have successfully completed the Meta Front-End Developer Professional Certificate on Coursera, covering React, Bootstrap, and other modern frontend technologies.",
    },
    aiCourse: {
      title: "100 hour course in Introduction to AI By UNRWA",
      subTitle:
        "100-hour course in Introduction to AI, UNRWA Grade: Excellent.",
      longSubTitle:
        "Completed a 100-hour “Introduction to AI” course through UNRWA, earning an Excellent grade. The course covered fundamental AI concepts, basic algorithms, and practical applications, providing a strong foundation in artificial intelligence principles.",
    },
    videoCompetition: {
      title: "Winner in a video competition organized by Dar Al-Fikr",
      subTitle:
        "Winner in a video competition organized by Dar Al-Fikr, Damascus, 2019",
      longSubTitle:
        "Recognized in a video competition organized by Dar Al-Fikr in Damascus (2019), highlighting creativity, visual storytelling, and video production skills — Sponsored by the Syrian Arab Republic, Ministry of Culture, Zebra (Open Your Imagination), Class Mabed, and YE Media.",
    },
    shortFilm: {
      title: "Certificate in Short Film & Animation",
      subTitle: "Visual storytelling, video editing, and basic motion design.",
      longSubTitle:
        "Earned a certificate in Short Film & Animation, covering principles of cinematography, Photoshop, Premiere Pro, video editing, and basic animation techniques. Developed skills in visual storytelling, motion, and creative content production, enhancing both technical and artistic abilities.",
    },
  },
  contact: {
    sectionTitle: {
      text: "Contact",
      highlightedText: "Me",
      bgText: "Contact",
    },
    description:
      "Actively seeking freelance, remote, full-time, or part-time opportunities.",
    getInTouchTitle: "Get in Touch",
    form: {
      fields: {
        name: { label: "Name", placeholder: "Your Name" },
        email: { label: "Email", placeholder: "youremail@example.com" },
        subject: { label: "Subject", placeholder: "Project Inquiry" },
        message: {
          label: "Message",
          placeholder: "Tell me about your project...",
        },
      },
      submitButton: {
        default: "Send Message →",
        loading: "Sending...",
      },
      successMessage: "Your message has been sent successfully!",
      errorMessage: "Oops! Something went wrong. Please try again.",
    },
  },
};

export type ProjectKeys = keyof typeof en.projects;
export type ProjectFields = keyof (typeof en.projects)[ProjectKeys];
export type CertificateKeys = keyof typeof en.certificates;
export type CertificateFields = keyof (typeof en.certificates)[CertificateKeys];
