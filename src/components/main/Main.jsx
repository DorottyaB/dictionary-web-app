import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useDictionaryData } from '../../custom-hooks/useDictionaryData';
import { Result } from '../result/Result';
import './main.css';

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  const [query, setQuery] = useState('');
  const { data, refetch, isLoading, isError } = useDictionaryData(query);

  const lengths = data?.data.map(a => a.meanings.length);
  const index = lengths?.indexOf(Math.max(...lengths));
  const result = data?.data[index];

  function updateQuery(e) {
    const { value } = e.target;
    setQuery(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    refetch();
  }

  return (
    <div className='main-container'>
      <form role='search'>
        <div className='search-bar'>
          <input
            className={theme.isLightTheme ? 'light' : 'dark'}
            style={{ backgroundColor: getTheme.inputBg, color: getTheme.text }}
            type='search'
            name='q'
            id='word-search'
            placeholder='Search for any word'
            pattern='^[a-zA-Z]+$'
            onChange={updateQuery}
            spellCheck={true}
            aria-label='Search for any word'
          />
          <button onClick={handleSubmit} className='search-btn' title='Search' type='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#a44ce6'
              viewBox='0 0 256 256'
            >
              <rect width='256' height='256' fill='none'></rect>
              <circle
                cx='116'
                cy='116'
                r='84'
                fill='none'
                stroke='#a44ce6'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></circle>
              <line
                x1='175.4'
                y1='175.4'
                x2='224'
                y2='224'
                fill='none'
                stroke='#a44ce6'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></line>
            </svg>
          </button>
        </div>
      </form>
      <div className='result-container'>
        {isLoading && (
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {isError && <p>We couldn't find definitions for the word you were looking for.</p>}
        {data && (
          <Result
            word={result.word}
            phonetics={result.phonetics}
            meanings={result.meanings}
            source={result.sourceUrls[0]}
          />
        )}
      </div>
    </div>
  );
};
