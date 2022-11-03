/* About Types and Data */
export type profile = {
  name: string,
  title: string,
  deets: string[],
  links: {
    github: string,
    linkedin: string
  }
}
export const profileData: profile = {
  name: "Macie Bey",
  title: "Software Engineer",
  deets: [
    "Oh wow",
    "Truely a beautiful site",
    "Look at that rotating gradient wow"
  ],
  links: {
    github: "https://github.com/maciebey/",
    linkedin: "https://www.linkedin.com/in/maciebey"
  }
}

/* Project Types and Data */
export enum tags {
  TypeScript = "TYPESCRIPT",
  React = "REACT",
  Redux = "REDUX",
  Heroku = "HEROKU"
}
export type project = {
  name: string,
  image: string,
  tags: tags[],
  description: string,
  ghLinks: {
    text: string,
    url: string
  }[],
  liveLinks?: {
    text: string,
    url: string
  }[],
}
export const projectData: project[] = [
  {
    name: "Great Wave",
    image: "wave.png",
    tags: [tags.TypeScript, tags.React, tags.Redux],
    description: "Interactive SVG manipulator.",
    ghLinks: [
      {
        text: "GitHub",
        url: "https://github.com/maciebey/great-wave"
      }
    ],
    liveLinks: [
      {
        text: "gw.mbdv.io",
        url: "http://gw.mbdv.io/"
      }
    ]
  },
  {
    name: "Unnamed Sound App",
    image: "mix.png",
    tags: [tags.TypeScript, tags.React, tags.Redux, tags.Heroku],
    description: "Personal application to mix YT video w/ audio files. Future state pivoting to full white/background noise generator.",
    ghLinks: [
      {
        text: "GitHub (UI)",
        url: "https://github.com/maciebey/equalizer"
      },
      {
        text: "GitHub (API)",
        url: "https://github.com/maciebey/equalizer-api"
      }
    ],
    liveLinks: [
      {
        text: "eq.mbdv.io",
        url: "http://eq.mbdv.io/"
      }
    ]
  },
  {
    name: "My Importfolio",
    image: "portfolio.png",
    tags: [tags.TypeScript, tags.React],
    description: "You're here now! My portfolio & landing page for mbdv.io.",
    ghLinks: [
      {
        text: "GitHub",
        url: "https://github.com/maciebey/mb-portfolio"
      }
    ]
  }
]
