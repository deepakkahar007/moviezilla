import { Button } from "./ui/button";
import { Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

type NavLinksType = {
  title: string;
  url: string;
}[];

const Navbar = () => {
  const linkItems: NavLinksType = [
    {
      title: "home",
      url: "/",
    },

    {
      title: "top movies",
      url: "/topmovies",
    },
    {
      title: "categories",
      url: "/categories",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between shadow-sm shadow-yellow-200 lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center rounded-full">
        <Clapperboard className={`size-8 text-primary`} />
        <Button variant={"link"} className="text-base font-semibold uppercase">
          <Link to={"/"}>moviezilla</Link>
        </Button>
      </div>
      <nav className="flex-row">
        {linkItems.map((l) => (
          <Button
            variant={"link"}
            key={l.title}
            className="text-base font-semibold uppercase"
          >
            <Link to={l.url}>{l.title}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
