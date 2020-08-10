import React from 'react';
import './nav.scss';
import NavMenu from '../nav-menu/nav-menu.component';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="header">
        <Link className="link" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <NavMenu />
      </div>
    );
  }
}

export default Nav;
