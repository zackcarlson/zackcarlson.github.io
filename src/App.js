import React from "react";
import Nav from "./components/Nav";
import { Landing } from "./pages/Landing";

export const App = () => {
  return (
    <div className="App--container">
      <Nav />
      <Landing />
    </div>
  );
};
