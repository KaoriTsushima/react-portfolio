import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import CV from "./CV";
import ContactMe from "./ContactMe";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
