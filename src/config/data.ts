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
