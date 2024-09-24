import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/lib/utils";
import Image from "./Image";
import { CarouselLoading } from "./Loading";

const Hero = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["5movies"],
    queryFn: async () => {
      return await fetchMovies("?_start=0&_end=5");
    },
  });

  return (
    <section className="mx-auto mt-2 flex items-center justify-center">
      {isLoading ? (
        <CarouselLoading />
      ) : (
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnFocusIn: true,
            }),
          ]}
          className="w-full max-w-sm lg:w-full"
        >
          <CarouselContent className="w-full">
            {data?.data.map((m: any) => (
              <CarouselItem key={m.rank}>
                <div className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-auto items-center justify-center p-6">
                      <Image src={m.image} className="h-full w-full" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      )}
    </section>
  );
};

export default Hero;
