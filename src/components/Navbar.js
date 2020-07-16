import React, { Component } from 'react';
import Navitem from './Navitem';
import Logo from '../img/logo.png'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'NavItemActive':''
    }
  }
  activeitem = (x) => {
    if(this.state.NavItemActive.length>0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x},() => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };
  render() {
    return (
      <nav>
        <div className="mobileCenter">
        <a href="/">
          <img src={Logo} className="mylogo" alt="Das ist mein Logo"></img>
        </a>
        </div>
        <ul>
          <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
          <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
          <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
          <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
          <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
        </ul>
      </nav>
    )
  }
}

export default Navbar
