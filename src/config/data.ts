/* About Types and Data */
export type profile = {
  name: string,
  title: string,
  deets: string[]
}
export const profileData: profile = {
  name: "Macie Bey",
  title: "Software Engineer",
  deets: [
    "Oh wow",
    "Truely a beautiful site",
    "Look at that rotating gradient wow"
  ]
}

/* Project Types and Data */
export enum tags {
  TypeScript = "TYPESCRIPT",
  React = "REACT",
  ReactRedux = "REACTREDUX"
}
export type project = {
  name: string,
  image: string,
  tags: tags[],
  description: string
}
export const projectData: project[] = [
  {
    name: "One",
    image: "wave.png",
    tags: [tags.TypeScript, tags.React, tags.ReactRedux],
    description: "big big yoshi"
  },
  {
    name: "Two",
    image: "mix.png",
    tags: [tags.TypeScript, tags.React],
    description: "bigger big big yoshi"
  },
  {
    name: "Three",
    image: "portfolio.png",
    tags: [],
    description: "biggest yoshur"
  }
]
