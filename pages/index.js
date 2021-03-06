import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bharadwaj/portfolio</title>
        <meta name="description" content="Portfolio of k.sai bharadwaj" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
