// src/App.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Button from '@mui/material/Button';

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>
      {/* Add your routes and other components here */}
    </div>
  );
}

export default App;

