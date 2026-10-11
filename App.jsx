import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Counters from "./components/Counters";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DailyInspiration from "./components/DailyInspiration";

export default function App() {
  useEffect(() => {
    const reveal = () => {
      document
        .querySelectorAll(
          ".child, .about-left, .about-right, .slide-in-left, .slide-in-right, .slide-in-bottom"
        )
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight - 40) {
            el.classList.add("show");
          }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Counters />
        <Portfolio />
        <Testimonials />
        <Blog />
        <DailyInspiration />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
