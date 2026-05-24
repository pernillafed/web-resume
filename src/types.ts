import { RefObject } from "react";

export interface Refs {
  presentationRef: RefObject<HTMLHeadingElement>;
  educationRef: RefObject<HTMLHeadingElement>;
  workRef: RefObject<HTMLHeadingElement>;
  portfolioRef: RefObject<HTMLHeadingElement>;
  computerRef: RefObject<HTMLHeadingElement>;
  languagesRef: RefObject<HTMLHeadingElement>;
}
