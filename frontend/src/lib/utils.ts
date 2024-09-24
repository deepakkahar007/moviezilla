import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

import axios from "axios";

export const fetchMovies = async (url: string) => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL + url}`);
  const movies = await Wait(3000).then(() => res);
  return movies;
};

import { useQuery } from "@tanstack/react-query";

type FetchMoviesTypes = {
  key: string;
  url: string;
};

export const fetchQuery = async ({ key, url }: FetchMoviesTypes) => {
  return await useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL + url}`);
      const movies = await Wait(3000).then(() => res);
      return movies;
    },
  });
};
