import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export const initGSAP = () => {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
};
