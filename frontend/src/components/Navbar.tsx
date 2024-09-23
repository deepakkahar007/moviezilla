import { Button } from "./ui/button";
import { Clapperboard } from "lucide-react";

const Navbar = () => {
  const linkItems = ["home", "top 10 movies", "categories"];

  return (
    <header className="flex w-full items-center justify-between shadow-sm shadow-yellow-200 lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center rounded-full">
        <Clapperboard className={`size-8 text-primary`} />
        <Button variant={"link"} className="text-base font-semibold uppercase">
          moviezilla
        </Button>
      </div>
      <nav className="flex-row">
        {linkItems.map((l) => (
          <Button
            variant={"link"}
            key={l}
            className="text-base font-semibold uppercase"
          >
            {l}
          </Button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
