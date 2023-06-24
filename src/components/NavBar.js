import React, {  useEffect } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'? 'active': ""}  `} to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/business'? 'active': ""} `}  to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/entertainment'? 'active': ""} `}  to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/health'? 'active': ""} `}  to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/science'? 'active': ""} `}  to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/sports'? 'active': ""} `}  to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/technology'? 'active': ""} `}  to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

