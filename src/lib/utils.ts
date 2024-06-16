import { StatisticType } from "@/type";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractMapData = (mapData: StatisticType[]) => {
  const labels: number[] = [];
  const values: number[] = [];

  for (let item of mapData) {
    labels.push(item.time);
    values.push(item.words);
  }

  return { labels, values };
};

export const people = [
  {
    name: "Keegnat",
    title: "303 wpm",
    department: "Optimization",
    email: "Keegnat@gmail.com",
    role: "	50 minutes ago",
    image: "/leader1.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "187 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	36 minutes ago",
    image: "/leader2.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "182 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	41 minutes ago",
    image: "/leader3.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "160 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	18 minutes ago",
    image: "/leader4.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "159 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	20 minutes ago",
    image: "/leader5.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "154 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	25 minutes ago",
    image: "/leader6.jpeg",
  },
  {
    name: "Lindsay Walton",
    title: "148 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	36 minutes ago",
    image: "/leader7.svg",
  },
  {
    name: "Lindsay Walton",
    title: "146 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	36 minutes ago",
    image: "/leader8.svg",
  },
  {
    name: "Lindsay Walton",
    title: "145 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	36 minutes ago",
    image: "/leader9.svg",
  },
  {
    name: "Lindsay Walton",
    title: "142 wpm",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "	15 minutes ago",
    image: "/leader10.svg",
  },
];
