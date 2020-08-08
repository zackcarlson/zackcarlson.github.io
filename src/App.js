import React from "react";
import Nav from "./components/Nav";
import { Landing } from "./pages/Landing";
import { Skills } from "./pages/Skills";

export const App = () => {
  return (
    <div className="App--container">
      <Nav />
      <Landing />
      <Skills />
    </div>
  );
};
