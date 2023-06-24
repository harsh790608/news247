import './App.css';
import News from './components/News';
import NavBar from './components/NavBar';
import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

let country = "in";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
    <Router>
    <NavBar />
    <LoadingBar color='#f11946' progress={progress}  />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}  key="general" category="general" country={country} />}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress}  key="business" category="business" country={country} />}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" category="entertainment" country={country} />}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress}  key="health" category="health" country={country} />}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress}  key="science" category="science" country={country} />}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" category="sports" country={country} />}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" category="technology" country={country} />}></Route>
      </Routes>
    </Router>
    </>  
  );
}

export default App;
