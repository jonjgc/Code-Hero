import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppThemeProvider } from './contexts/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(/Busca de personagens/i);
  expect(titleElement).toBeInTheDocument();
});
