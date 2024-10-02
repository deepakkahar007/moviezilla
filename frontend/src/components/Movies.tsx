import { fetchMovies } from "@/lib/utils";
import MovieCard from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
import { CardLoading } from "./Loading";

const Movies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["newMovies"],
    queryFn: async () => {
      const res = await fetchMovies("?_sort=year&_limit=10");
      return res;
    },
  });

  return (
    <div className="mx-6 mt-2 w-full scroll-smooth">
      <h1 className="my-2 text-center text-2xl font-semibold capitalize underline decoration-primary underline-offset-8">
        top newest action movies
      </h1>

      <div className="grid grid-cols-2 gap-1 space-y-2 lg:grid-cols-5">
        {isLoading
          ? [1, 2, 3, 4].map((i) => <CardLoading key={i} />)
          : data?.data.map((m: any) => (
              <MovieCard
                key={m.rank}
                id={m.rank}
                title={m.title}
                img={m.image}
                genre={m.genre}
              />
            ))}
      </div>
    </div>
  );
};

export default Movies;
