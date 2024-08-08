import React from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="text-right mb-3">
      <Button variant={theme === 'light' ? 'dark' : 'light'} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </div>
  );
}

export default ThemeToggle;
