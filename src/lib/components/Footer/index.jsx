import React from 'react';
import { Container } from 'lib/elements/Grid';

const Footer = () => (
  <footer className="container-fluid">
    <Container>
      <span>© 2021 MoovieTime. All rights reserved.</span>

      <img src={process.env.PUBLIC_URL + '/images/moovietime-logo-grey@2x.png'} alt="logo" />

      <span>Made with ReactJS</span>
    </Container>
  </footer>
);

export default Footer;
