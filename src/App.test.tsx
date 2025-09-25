import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppThemeProvider } from './contexts/ThemeContext';

test('renders learn react link', () => {
  render(
    <AppThemeProvider>
      <App />
    </AppThemeProvider>,
  );
  const titleElement = screen.getByText(/Busca de personagens/i);
  expect(titleElement).toBeInTheDocument();
});
