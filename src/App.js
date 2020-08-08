import React from "react";
import Nav from "./components/Nav";
import { Landing } from "./pages/Landing";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";

export const App = () => {
  return (
    <div className="App--container">
      <Nav />
      <Landing />
      <Skills />
      <Projects />
    </div>
  );
};
