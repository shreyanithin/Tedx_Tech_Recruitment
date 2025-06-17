import Hero from "./components/Hero"
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import About from "./components/About";

export default function Home(){
  return(
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <About />
      </main>
    </>
  );
}