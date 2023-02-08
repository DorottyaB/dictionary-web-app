import { useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { ThemeContext } from './contexts/ThemeContext';

const queryClient = new QueryClient();

function App() {
  const { font, theme } = useContext(ThemeContext);
  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className='App'
        style={{ fontFamily: font.name, backgroundColor: getTheme.bg, color: getTheme.text }}
      >
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
