import Hero from "./components/Hero"
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Stats from "./components/Stats"
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home(){
  return(
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Stats/>
        <Speakers />
        <Sponsors />
        <Footer />
      </main>
    </>
  );
}