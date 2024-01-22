import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bar from './UI/Bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addinguser from './Users/Addinguser';
import Home from './Allpages/Home';
import Edituser from './Users/Edituser';
import View from './Users/View';

function App() {

  return (
    <div className="App">
      <Router>
        <Bar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Addinguser" element={<Addinguser />} />
          <Route exact path="/edituser/:id" element={<Edituser />} />
          <Route exact path="/viewuser/:id" element={<View />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
