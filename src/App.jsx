import NavBar from "./LayOut/NavBar";
import {Footer} from "./LayOut/Footer";
import {Hero} from "./Sections/Hero"
import {About} from "./Sections/About"
import {Projects} from "./Sections/Projects"
import {Experience} from "./Sections/Experience"
import {Contact}  from "./Sections/Contact"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
