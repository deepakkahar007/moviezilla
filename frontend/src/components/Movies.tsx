import { fetchQuery } from "@/lib/utils";
import MovieCard from "./MovieCard";
import { useState } from "react";

const Movies = () => {
  const [data, setData] = useState([]);

  (async () => {
    const { data } = await fetchQuery({
      key: "action",
      url: "?_sort=year&_order=asc&_limit=10",
    });
    setData(data?.data);

    return;
  })();

  return (
    <div className="mx-6 mt-2 w-full scroll-smooth">
      <h1 className="my-2 text-center text-2xl font-semibold capitalize underline decoration-primary underline-offset-8">
        top newest action movies
      </h1>

      <div className="grid grid-cols-2 gap-1 space-y-2 lg:grid-cols-5">
        {data.length == 0 ? (
          <h1>loading...</h1>
        ) : (
          data.map((m: any) => (
            <MovieCard
              key={m.rank}
              id={m.rank}
              title={m.title}
              img={m.image}
              genre={m.genre}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
