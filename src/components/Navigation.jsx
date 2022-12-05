import React from 'react';
import { MdGTranslate } from 'react-icons/md';
import { RiLightbulbFill, RiLightbulbLine } from 'react-icons/ri';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function Navigation() {
  const { toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button className="navigation__theme-button" onClick={toggleTheme} aria-label="theme button">
            {theme === 'light' ? <RiLightbulbFill /> : <RiLightbulbLine />}
          </button>
        </li>
        <li>
          <button className="navigation__translate-button" onClick={toggleLocale} aria-label="translate button"><MdGTranslate /></button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
