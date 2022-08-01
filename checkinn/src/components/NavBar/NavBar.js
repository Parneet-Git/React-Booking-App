import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand" href="#">CheckInn</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className='bi bi-caret-down-square-fill'></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id='home' className="nav-link active" aria-current="page" href="#"><i className='bi bi-house-fill'></i> Home</a>
              </li>
              <li className="nav-item">
                <a id="popular" className="nav-link" href="#"><i className='bi bi-lightning-charge-fill'></i> Popular</a>
              </li>
              <li className="nav-item">
                <a id='register' className="nav-link" href="#"><i className='bi bi-person-plus-fill'></i> Register</a>
              </li>
              <li className="nav-item">
                <a id='sign-in' className="nav-link" href="#"><i className='bi bi-person-check-fill'></i> Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
