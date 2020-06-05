import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import navstyle from './nav.module.scss';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${navstyle.header}`}>
      <Navbar className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header">
        <Navbar.Header>
          <Nav className="navbar-nav mx-auto">
          </Nav>
        </Navbar.Header>
      </Navbar>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
