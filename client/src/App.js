import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import O_nas from './pages/o_nas'
import Kontakt from './pages/Kontakt'
import Bron_krotka from "./pages/Bron_krotka";
import Bron_dluga from "./pages/Bron_dluga";
import Bron_historyczna from "./pages/Bron_historyczna";
import User from "./pages/user"
import React from "react";

function App() {

  return (
      <div className="App">

          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/O_nas" exact element={<O_nas />} />
                <Route path ="/Kontakt" exact element = {<Kontakt />} />
                <Route path ="/Bron_krotka" exact element = {<Bron_krotka />} />
                <Route path ="/Bron_dluga" exact element = {<Bron_dluga />} />
                <Route path ="/Bron_historyczna" exact element = {<Bron_historyczna />} />
                <Route path ="/User" exact element={<User/>} />
            </Routes>
          </Router>

          <footer className="Footer container-fluid text-white py-1 pt-4">
              <p className="fw-bold text-center align-self-center">Military Site Sp. z o.o. 2022 <img className="img-fluid" src={require('./pages/img/military_site.jpg')} width={25} height={35} /></p>
          </footer>

      </div>
  );
}

export default App;
