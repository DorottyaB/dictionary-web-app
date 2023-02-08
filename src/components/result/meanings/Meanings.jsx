import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './meanings.css';

export const Meanings = ({ meanings }) => {
  const { theme } = useContext(ThemeContext);
  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <>
      {meanings.map((meaning, index) => (
        <section key={index}>
          <h2 className='title'>
            <span style={{ backgroundColor: getTheme.bg }}>{meaning.partOfSpeech}</span>
          </h2>
          <div>
            <h3 className='sub-title'>Meaning</h3>
            <ul>
              {meaning.definitions.map((definition, index) => (
                <li key={index}>
                  {definition.definition}
                  {definition.example && <q>{definition.example}</q>}
                </li>
              ))}
            </ul>
          </div>
          {meaning.synonyms.length > 0 ? (
            <div className='synonyms-container'>
              <h3 className='sub-title'>Synonyms</h3>
              {meaning.synonyms.map((synonym, index) => (
                <span key={index} className='purple-text'>
                  {synonym}
                </span>
              ))}
            </div>
          ) : (
            ''
          )}
        </section>
      ))}
    </>
  );
};
