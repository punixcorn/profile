import React from "react";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Stuff } from "./components/Stuff";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Stuff />
      <Contact />
    </>
  );
}

export default App;
