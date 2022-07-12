import React, { Component } from "react";
import Homez2 from "./registration";
import Home2z2 from "./log in";
import Main from "./1page/pages";
import Homez3 from "./z3 1block";
import ImageMapEditor from "./z4 block";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import SecondPage from "./secondpage";

function App() {
  return (
    // jshint ignore:start
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/registration" element={<Homez2 />} />
            <Route path="/login" element={<Home2z2 />} />
            <Route path="/creating" element={<Homez3 />} />
            <Route path="/catalog" element={<SecondPage />} />
          </Routes>
        </>
      </div>
    </BrowserRouter>
    /* jshint ignore:end */
  );
}

export default App;
