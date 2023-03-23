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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
