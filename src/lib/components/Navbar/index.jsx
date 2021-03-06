import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'lib/elements/Grid';
import SearchBar from 'lib/components/SearchBar';
import Category from './Category';
import Icon from 'icon';

const listMenu = [
  {
    label: 'Movies',
    link: '/#'
  }, {
    label: 'TV Shows',
    link: '/#'
  }, {
    label: 'Login',
    link: '/faq'
  }
];

const Navbar = ({ location }) => {
  const [mobile, seMobile] = useState(false);
  const [catMenu, setCatMenu] = useState(false);
  const [navStyle, setNavStyle] = useState('');

  useEffect(() => {
    setNavStyle(location.pathname.includes('movie') ? 'transparant' : '');
  }, [location.pathname]);

  return (
    <Container fluid className={ `navbar ${navStyle}` }>
      <Container>
        <Row>
          <Link to="/" className="col-md-2 col-4 logo">
            <img
              src={process.env.PUBLIC_URL + '/images/moovietime-logo@2x.png'}
              alt="logo"
            />
          </Link>

          <Col md={4}>
            <div className="search-bar-wrapper">
              <SearchBar suggestions={['test 1', 'test 2']} />
            </div>
          </Col>

          <button className="menu-btn" onClick={ () => seMobile(!mobile) }>
            <Icon name="menu" size={32} />
          </button>

          <nav className={ `${mobile ? 'hidden' : 'flex'} col-md-6` }>
            <button
              onMouseEnter={() => setCatMenu(true)}
              className="item"
            >
              <Icon name="view-grid" />
              Categories
              { catMenu && <Category /> }
            </button>

            { listMenu.map(({ link, label, icon }, i) => (
              <Link onClick={ () => seMobile(!mobile) } className="item" to={ link } key={ i }>
                { icon && <Icon name={icon} /> }
                { label }
              </Link>
            )) }
          </nav>
        </Row>
      </Container>
    </Container>
  );
};

export default withRouter(Navbar);
