import React from "react";
import "./App.css";
import AddDirector from "./components/directorstable/AddDirector/index";
import DirectorsTable from "./components/directorstable/DirectorsTable";
import MoviesTable from "./components/moviesTable/MoviesTable";

function App() {
  return (
    <div className="App">
      <MoviesTable />
      <DirectorsTable />
      <AddDirector />
    </div>
  );
}

export default App;
