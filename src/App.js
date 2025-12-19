import './App.css';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Inicio from './pages/Inicio';
import Curriculo from './pages/Curriculo';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // apply theme class to body so global styles inherit correctly
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className={`app-container theme-${theme}`}>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
      {currentPage === 'inicio' && <Inicio setCurrentPage={setCurrentPage} />}
      {currentPage === 'curriculo' && <Curriculo />}
    </div>
  );
}

export default App;
