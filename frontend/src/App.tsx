import { Hero, Movies, Navbar } from "./components";

function App() {
  return (
    <main className="container mx-auto my-2">
      <Navbar />
      <Hero />
      <Movies />
    </main>
  );
}

export default App;
