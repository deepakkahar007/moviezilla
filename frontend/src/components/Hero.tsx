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

const Hero = () => {
  const { data } = useQuery({
    queryKey: ["5movies"],
    queryFn: async () => {
      return await fetchMovies("?_start=0&_end=5");
    },
  });
  console.log(data);

  return (
    <section className="mx-auto mt-2 flex items-center justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnFocusIn: true,
          }),
        ]}
        className="w-full max-w-sm lg:w-full"
      >
        <CarouselContent>
          {data?.data.map((m) => (
            <CarouselItem key={m.rank}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center p-6">
                    <Image src={m.image} className="h-full w-full" />
                    {/* <span className="text-2xl font-semibold">{m.title}</span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </section>
  );
};

export default Hero;
