import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/shows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/funccalling">
                funccalling
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                use state demo1
              </Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
