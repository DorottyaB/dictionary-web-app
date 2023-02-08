import { useContext } from 'react';
import caretDown from '../../assets/caret-down.svg';
import caretUp from '../../assets/caret-up.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Dropdown } from '../dropdown/Dropdown';
import './header.css';

export const Header = () => {
  const { theme, toggleTheme, isDropdownOpen, setIsDropdownOpen, font } = useContext(ThemeContext);
  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <div className='header'>
      <div className='logo-container'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='#757575'
          viewBox='0 0 256 256'
        >
          <rect width='256' height='256' fill='none'></rect>
          <path
            d='M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z'
            fill='none'
            stroke='#757575'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='12'
          ></path>
          <polyline
            points='48 216 48 224 192 224'
            fill='none'
            stroke='#757575'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='12'
          ></polyline>
        </svg>
      </div>
      <div>
        <div className='row'>
          <div className='dropdown-container'>
            <button
              className='dropdown-btn'
              style={{ fontFamily: font.name }}
              onClick={() => setIsDropdownOpen(prevState => !prevState)}
            >
              <span style={{ color: getTheme.text }}>{font.type}</span>
              <img
                src={isDropdownOpen ? caretUp : caretDown}
                width='22px'
                height='22px'
                alt='Arrow icon'
              />
            </button>
            {isDropdownOpen && <Dropdown />}
          </div>
          <div className='theme-btn-container'>
            <label className='switch'>
              <input type='checkbox' onChange={toggleTheme} checked={!theme.isLightTheme} />
              <span className='slider round'></span>
            </label>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill={getTheme.iconColor}
              viewBox='0 0 256 256'
            >
              <rect width='256' height='256' fill='none'></rect>
              <path
                d='M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z'
                fill='none'
                stroke={getTheme.iconColor}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='12'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
