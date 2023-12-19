import './MobileMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthNav from 'components/AuthNav';

const MobileMenu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prevState => !prevState);
    if (!isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={`header ${isMenuOpened ? 'menu-opened' : ''}`}>
      <div className="header-wrapper">
        <div className="burger-container" onClick={toggleMenu}>
          <div id="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
          </div>
        </div>
        <div className="logo-wrapper">
          <p className="logo">
            <span className="logo-span">RENTA</span>CAR
          </p>
        </div>
      </div>

      <ul className="menu">
        <li className="menu-item">
          <Link className="item" to="/" onClick={toggleMenu}>
            About us
          </Link>
        </li>
        <li className="menu-item">
          <Link className="item" to="/catalog" onClick={toggleMenu}>
            Cars Park
          </Link>
        </li>
        <li className="menu-item">
          <Link className="item" to="/favorites" onClick={toggleMenu}>
            My favorite cars
          </Link>
        </li>
        <li className="menu-item">
          <Link className="item" to="/service" onClick={toggleMenu}>
            Administration
          </Link>
        </li>
      </ul>

      <div className="user-info">
        <AuthNav toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default MobileMenu;
