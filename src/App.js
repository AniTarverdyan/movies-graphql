import React from "react";
import "./App.css";
import DirectorsTable from "./components/Directorstable";
import Header from "./components/Header";
import MoviesTable from "./components/MoviesTable";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<DirectorsTable />} />
          <Route path="/movies" element={<MoviesTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
