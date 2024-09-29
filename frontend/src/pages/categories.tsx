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

type CategoriesType = {
  title: string;
  url: string;
  poster?: string | "action.jpg";
}[];

const Categories = () => {
  const categories: CategoriesType = [
    { title: "Action", url: "movie/Action" },
    { title: "Thriller", url: "movie/Thriller" },
    { title: "Drama", url: "movie/Drama" },
    { title: "Comedy", url: "movie/Comedy" },
    { title: "Suspense", url: "movie/Suspense" },
    { title: "Mystery", url: "movie/Mystery" },
    { title: "Romance", url: "movie/Romance" },
    { title: "War", url: "movie/War" },
  ];

  return (
    <div className="my-3">
      <h1 className="text-center text-2xl uppercase underline decoration-primary underline-offset-8">
        movie categories
      </h1>

      <div className="mx-3 my-4 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:space-x-4">
        {categories.map(({ title, url, poster }) => {
          return (
            <Link key={title} to={`/categories/${title}`}>
              <Card className="flex min-h-9 w-44 cursor-pointer flex-col items-center justify-between hover:border hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold capitalize text-primary">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image src={"drama.jpg"} className="h-40" />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
