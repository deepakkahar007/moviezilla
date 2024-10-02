import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../lib/utils";
import { CardLoading } from "@/components/Loading";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "../components/Image";
import { Star } from "lucide-react";

const MoviesCategories = () => {
  const { categorie } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await fetchMovies("/");
      const filtered = data.filter((m: any) => m.genre.includes(categorie));
      return filtered;
    },
  });

  return (
    <div className="my-2">
      <h1 className="text-center text-2xl uppercase underline decoration-primary underline-offset-8">
        {categorie} movies
      </h1>

      <div className="mx-2 grid grid-cols-2 gap-3 space-x-4 lg:grid-cols-5 lg:gap-4 lg:space-y-3">
        {isLoading
          ? [1, 2, 3, 4, 5].map((i) => <CardLoading key={i} />)
          : data.map(({ title, big_image, imdb_link, rating }: any) => {
              return (
                <a key={title} href={imdb_link} target="_blank">
                  <Card className="flex min-h-9 w-44 cursor-pointer flex-col items-center justify-between hover:border hover:border-primary">
                    <CardHeader>
                      <CardTitle className="flex flex-col justify-between text-lg font-semibold capitalize text-primary">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image src={big_image} className="h-40" />
                    </CardContent>
                    <CardFooter className="flex space-x-2">
                      <span className="text-white">IMDB Rating - {rating}</span>
                      <Star color="#e5a50a" size={"16px"} />
                    </CardFooter>
                  </Card>
                </a>
              );
            })}
      </div>
    </div>
  );
};

export default MoviesCategories;
