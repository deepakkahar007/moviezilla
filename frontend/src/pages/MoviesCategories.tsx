import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMovies } from "../lib/utils";
import MovieCard from "@/components/MovieCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const MoviesCategories = () => {
  const { categorie } = useParams();

  const query = useQueryClient();

  // query.invalidateQueries({ queryKey: ["categories"] });

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
        {isLoading ? (
          <h1>loading ....</h1>
        ) : (
          data.map(({ title, big_image, imdb_link, rating }: any) => {
            return (
              <a key={title} href={imdb_link} target="_blank">
                <Card className="flex min-h-9 w-44 cursor-pointer flex-col items-center justify-between hover:border hover:border-primary">
                  <CardHeader>
                    <CardTitle className="flex flex-col justify-between text-lg font-semibold capitalize text-primary">
                      <span className="text-white">
                        Rating -{rating}
                        <Star color="#e5a50a" size={"16px"} />
                      </span>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src={big_image} className="h-40" />
                  </CardContent>
                </Card>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MoviesCategories;
