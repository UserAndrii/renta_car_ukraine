import { useState } from 'react';
import './MobileMenu.css';

const MobileMenu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prevState => !prevState);
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
          <a href="#mac">About us</a>
        </li>
        <li className="menu-item">
          <a href="#ipad">Cars Park</a>
        </li>
        <li className="menu-item">
          <a href="#iphone">My favorite cars</a>
        </li>
        <li className="menu-item">
          <a href="#watch">Administration</a>
        </li>
      </ul>
    </header>
  );
};

export default MobileMenu;
