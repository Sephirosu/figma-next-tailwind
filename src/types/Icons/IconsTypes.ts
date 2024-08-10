import { RefObject } from "react";

export type Icon = {
  id: number;
  photo: string;
  width: number;
  height: number;
};

export type IconsProps = {
  containerRef: RefObject<HTMLDivElement>;
  icons: Icon[];
};
