import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TopMovies = () => {
  const [page, setPage] = useState(1);

  function loadMoreData(currPage: number) {
    const { data } = useQuery({
      queryKey: ["infinite"],
      queryFn: async () => {
        const { data } = await fetchMovies(`_page=${currPage}`);
        return data;
      },
    });
  }

  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["newest"],
    queryFn: loadMoreData(page),
    initialPageParam: 1,
  });

  return (
    <div className="my-2">
      <h1 className="text-center text-3xl underline">Top movies page</h1>

      <div>
        <Button onClick={() => setPage(page + 1)}>Load more Movies</Button>
      </div>
    </div>
  );
};

export default TopMovies;
