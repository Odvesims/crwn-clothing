import { Fragment, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  const [menuLinks, setMenuLinks] = useState([]);
  useEffect(() => {
    const links = [
      { id: 1, route: 'shop', label: 'SHOP' },
      { id: 2, route: 'authentication', label: 'SIGN IN' },
    ];
    setMenuLinks(links);
  }, []);

  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {menuLinks.map((link) => {
            const { id, route, label } = link;
            return (
              <Link key={id} className="nav-link" to={route}>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
