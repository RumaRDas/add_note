import React from 'react'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Noats App</a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">Add Note</a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Navbar;
