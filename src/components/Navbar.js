import React, { Component } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo_official.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'



const Logo = class extends React.Component {
  render() {
    return (
      <Link to="/" className="navbar-item" title="Logo">
        <img className="navbar-img-logo" src={logo} alt="pomodori al sole" />
      </Link>
    )
  };

}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <div>
        <Logo />
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-centered">
                <Link className="navbar-item" to="/">
                  Home
              </Link>
                <Link className="navbar-item" to="/ricette-a-z">
                  Ricette
              </Link>
                <Link className="navbar-item" to="/ricette">
                  Orto
              </Link>
                <Link className="navbar-item" to="/chi-siamo">
                  Chi Siamo
              </Link>
                <Link className="navbar-item" to="/chi-siamo">
                  <FontAwesomeIcon icon={faSearch} size="1x" />
                </Link>


                {/* <Link className="navbar-item" to="/products">
                  Products
              </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
              </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
              </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
              </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}



export default Navbar
