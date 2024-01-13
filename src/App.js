import "./App.css";
import myfirebaseapp from "./firebase";
import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AccordionButton, Navbar } from "react-bootstrap";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/NavBar";
import { useDispatch } from "react-redux";
import { addmydatadata } from "./redux/Action";
import Particle from "./components/home/Particle";
import "./style.css";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";
import { data } from "./data";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    myfirebaseapp
      .database()
      .ref()
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        dispatch(addmydatadata(snapshot.val() ? snapshot.val() : data));
      });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={isloading ? "no-scroll" : "scroll"}>
      <Loader isloading={isloading} />
      {/* <Particle /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
