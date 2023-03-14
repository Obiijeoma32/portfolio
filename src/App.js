import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Helmet>
        <title>Candy's Portfolio</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
