// import { useState } from 'react';
// import Navbar from './components/navbar';
// import logo from './logo.svg';
// import About from './pages/about';
// import Contact from './pages/contact';
// import Github from './pages/github';
// import Home from './pages/home';
// import Projects from './pages/projects';
// import Skills from './pages/skills';
// import { useSelector } from 'react-redux';
// import style from "./app.module.css"
// import Tools from './pages/tools';
// import svg from "./pages/Images/up.svg"
// import ScrollToTop from "react-scroll-to-top";
// function App() {
//   const [isH1Visible, setIsH1Visible] = useState(true);


//   return (
//     < >
//       <Navbar />
//       <Home isH1Fixed={isH1Visible} setIsH1Fixed={setIsH1Visible} />
//       <About />
//       <Skills />
//       <Tools />
//       <Projects />
//       <Github />
//       <Contact />
//       <ScrollToTop smooth
//         viewBox="0 0 400 400"
//         svgPath="M114,74.5a19.92,19.92,0,0,0-28.5,0L57,103a9.9,9.9,0,0,0,14,14L99.5,88.5,128,117a9.9,9.9,0,0,0,14-14Z"
//         width="100"
//         height="100"
        
//         style={{
//           boxShadow: 'none',
//           transition: 'none'
//         }}
//       />
//     </>
//   );
// }

// export default App;
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
