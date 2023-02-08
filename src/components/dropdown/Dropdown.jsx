import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './dropdown.css';

export const Dropdown = () => {
  const { setIsDropdownOpen, setFont } = useContext(ThemeContext);

  function handleChange(event) {
    const { value, labels } = event.target;
    setFont(prevFormData => {
      return {
        ...prevFormData,
        name: value,
        type: labels[0].innerText,
      };
    });
    setIsDropdownOpen(prevValue => !prevValue);
  }

  return (
    <div className='dropdown-inputs'>
      <input
        type='radio'
        value='Roboto Serif, serif'
        id='serif'
        name='font'
        onChange={handleChange}
      />
      <label
        className='dropdown-label'
        htmlFor='serif'
        style={{ fontFamily: 'Roboto Serif, serif' }}
      >
        Serif
      </label>
      <input
        type='radio'
        value='Roboto Flex, sans-serif'
        id='sans-serif'
        name='font'
        onChange={handleChange}
      />
      <label
        className='dropdown-label'
        htmlFor='sans-serif'
        style={{ fontFamily: 'Roboto Flex, sans-serif' }}
      >
        Sans
      </label>
      <input
        type='radio'
        value='Roboto Mono, monospace'
        id='monospace'
        name='font'
        onChange={handleChange}
      />
      <label
        className='dropdown-label'
        htmlFor='monospace'
        style={{ fontFamily: 'Roboto Mono, monospace' }}
      >
        Mono
      </label>
    </div>
  );
};
