import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppThemeProvider } from '../../contexts/ThemeContext';
import { CharactersListPage } from '.';

const renderWithTheme = (component: React.ReactNode) => {
  return render(<AppThemeProvider>{component}</AppThemeProvider>);
};

describe('CharactersListPage', () => {
  it('deve renderizar a listagem de personagens', () => {
    renderWithTheme(<CharactersListPage />);
    expect(
      screen.getByRole('heading', { name: /Busca de personagens/i }),
    ).toBeInTheDocument();
  });
});
