import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ChildrenProps = { children: React.ReactNode };
