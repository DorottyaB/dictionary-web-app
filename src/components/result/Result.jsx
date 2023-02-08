import { useContext, useState } from 'react';
import playIcon from '../../assets/play.svg';
import pauseIcon from '../../assets/pause.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Meanings } from './meanings/Meanings';
import './result.css';

export const Result = ({ word, phonetics, meanings, source }) => {
  const { theme } = useContext(ThemeContext);
  const getTheme = theme.isLightTheme ? theme.light : theme.dark;
  const [isPlaying, setIsPlaying] = useState(false);

  const phonetic = phonetics.find(item => item.license);
  const audioElement = new Audio(phonetic?.audio);

  function handleAudio() {
    audioElement.volume = 0.2;
    setIsPlaying(prevValue => !prevValue);
    isPlaying ? audioElement.pause() : audioElement.play();
    audioElement.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  }

  return (
    <main>
      <div className='grid'>
        <h1>{word}</h1>
        <p className='phonetic'>{phonetic?.text || phonetics[0].text}</p>
        <button className='play-stop-btn' onClick={handleAudio} disabled={!audioElement.src}>
          <img
            src={isPlaying ? pauseIcon : playIcon}
            width='20px'
            height='20px'
            alt='Play/pause icon'
          />
        </button>
      </div>
      <Meanings meanings={meanings} />
      <section className='source-container'>
        <h4 className='source'>Source</h4>
        <a href={source} target='_blank' rel='noreferrer' style={{ color: getTheme.text }}>
          {source}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='#757575'
            viewBox='0 0 256 256'
          >
            <rect width='256' height='256' fill='none'></rect>
            <polyline
              points='216 100 216 40 156 40'
              fill='none'
              stroke='#757575'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></polyline>
            <line
              x1='144'
              y1='112'
              x2='216'
              y2='40'
              fill='none'
              stroke='#757575'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></line>
            <path
              d='M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64'
              fill='none'
              stroke='#757575'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></path>
          </svg>
        </a>
      </section>
    </main>
  );
};
