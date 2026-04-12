// values-data.ts — Centralized data store for Values cards
import { ValueCardProps } from "@/components/ValueCard";

// Each object = one "instance" of a ValueCard
export const VALUES_DATA: ValueCardProps[] = [
  {
    index: 1,
    title: ["Friendship"],
    description:
      "Having a strong drive to be excellent leaders who connect people to accomplish shared goals.",
    imageSrc:"/resources/Friendship.jpeg",
  },
  {
    index: 2,
    title: ["Leadership"],
    description:
      "A profound organization in leadership, serving as a bridge between the professional world and highly motivated students.",
    imageSrc:"/resources/Leadership.jpeg"
  },
  {
    index: 3,
    title: ["Partnership"],
    description:
      "Encouraging partnership and collaboration with various parties in the professional team.",
    imageSrc:"/resources/Partnership.jpg"
  },
];
