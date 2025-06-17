import Hero from "./components/Hero"
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Speakers from "./components/Speakers";

export default function Home(){
  return(
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Speakers />
      </main>
    </>
  );
}