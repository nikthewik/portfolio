// LIBRARIES
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// COMPONENTS
import AppLayout from "./components/AppLayout/AppLayout";
// PAGES
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
