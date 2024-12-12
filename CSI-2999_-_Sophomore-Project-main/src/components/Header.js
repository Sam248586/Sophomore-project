import React from 'react';
import { Link } from 'react-router-dom';
import logo_lighttheme from './FitTraxLogo_LightTheme.png';
import logo_darktheme from './FitTraxLogo_DarkTheme.png';
import './Header.css';

function Header() {
  // If the theme is light theme, returns the Light Theme logo. Can be expanded easily for additional themes.
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    return (
      <header className="header">
          <img src={logo_lighttheme} alt="FitTrax Logo (Light Theme)" className="header-logo" />
        <nav>
          <Link to="/">Home</Link>
          <span className="separator">|</span>
          <Link to="/favorites">Favorites</Link>
          <span className="separator">|</span>
          <Link to="/settings">Settings</Link>
          <span className="separator">|</span>
          <Link to="/library">Workout Library</Link>
          <span className="separator">|</span>
          <Link to="/weightscale">Weight Scale</Link>
          <span className="separator">|</span>
          <Link to="/plan">Workout Plan</Link>
        </nav>
      </header>
    );
  }
  else {
    return (
      <header className="header">
        <img src={logo_darktheme} alt="FitTrax Logo (Dark Theme)" className="header-logo" />
        <nav>
          <Link to="/">Home</Link>
        <span className="separator">|</span>
          <Link to="/favorites">Favorites</Link>
          <span className="separator">|</span>
          <Link to="/settings">Settings</Link>
          <span className="separator">|</span>
          <Link to="/library">Workout Library</Link>
          <span className="separator">|</span>
          <Link to="/weightscale">Weight Scale</Link>
          <span className="separator">|</span>
          <Link to="/plan">Workout Plan</Link>
      </nav>
    </header>
  );
}
}

export default Header;
