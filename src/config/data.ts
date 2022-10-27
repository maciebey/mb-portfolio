export enum tags {
  TypeScript = "TYPESCRIPT",
  React = "REACT",
  ReactRedux = "REACTREDUX"
}
export type project = {
  name: string,
  tags: tags[],
  description: string
}
export const projectData: project[] = [
  {
    name: "One",
    tags: [tags.TypeScript, tags.React, tags.ReactRedux],
    description: "big big yoshi"
  },
  {
    name: "Two",
    tags: [tags.TypeScript, tags.React],
    description: "bigger big big yoshi"
  },
  {
    name: "Three",
    tags: [],
    description: "biggest yoshur"
  }
]
