import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import circle from "../../assets/home/desktop/bg-pattern-hero-home.svg"

interface isoftCardsProps{
    bg: string,
    src: string,
    title: string,
    text: string
}
export const softCards: isoftCardsProps[] = [
  {
    bg: circle,
    src: passionate,
    title: "PASSIONATE",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
},
{
  bg: circle,
  src: resourceful,
  title: "RESOURCEFUL",
  text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients needs."
},
  {
    bg: circle,
    src: friendly,
    title: "FRIENDLY",
    text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];
