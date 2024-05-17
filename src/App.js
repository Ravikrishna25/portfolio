
import { useState } from 'react';
import Navbar from './components/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Github from './pages/github';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import { useSelector } from 'react-redux';
import style from "./app.module.css";
import Tools from './pages/tools';
import ScrollToTop from "react-scroll-to-top";
import upSvg from "./pages/Images/up.svg";

function App() {
  const [isH1Visible, setIsH1Visible] = useState(true);

  return (
    <>
      <Navbar />
      <Home isH1Fixed={isH1Visible} setIsH1Fixed={setIsH1Visible} />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Github />
      <Contact />
      <ScrollToTop
        smooth
        component={<img src={upSvg} alt="Scroll to top" />} // Using custom SVG as the scroll-to-top button
      
        style={{
          // boxShadow: 'none',
          transition: 'none'
        }}
      />
    </>
  );
}

export default App;
