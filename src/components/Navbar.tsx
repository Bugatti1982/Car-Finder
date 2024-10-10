// Imports from the DOM library
// This link changes the URL without causeing a page refresh
// dependant on the npm package react-router-dom
// import the link component from the react-router-dom package and REACT
// ********WE NEED TO take slashes off the line below when we finish the code********

// import React from 'react';
import { Link } from "react-router-dom";

// this renders the Nav bar on the page and links to home page
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Link to='/'>
          <h2>Volunteer Management System</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
