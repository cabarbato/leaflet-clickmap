import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import progressstyle from './progress.module.scss';

const Footer = () => (
  <footer className={`footer ${progressstyle.footer}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <p>Progress</p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;
