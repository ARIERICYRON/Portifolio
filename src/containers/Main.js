import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import Experience from "../pages/experience/Experience";

export default function Main({ theme }) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route path="/home" element={<Home theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/education" element={<Education theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/education" element={<Education theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
