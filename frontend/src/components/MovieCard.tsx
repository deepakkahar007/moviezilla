import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "./Image";
import { Link } from "react-router-dom";

type MovieCardType = {
  id: string;
  title: string;
  img: string;
  url?: string;
  genre?: string[];
};

const MovieCard = ({ img, title, genre }: MovieCardType) => {
  return (
    <Link to={`movie/${title}`}>
      <Card className="flex min-h-9 w-44 cursor-pointer flex-col items-center justify-between hover:border hover:border-primary">
        <CardHeader>
          <CardTitle className="text-lg font-semibold capitalize text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={img} className="h-40" />
        </CardContent>
        <CardFooter>
          <p className="line-clamp-3">{genre?.join(", ")}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MovieCard;
