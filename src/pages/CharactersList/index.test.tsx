import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppThemeProvider } from '../../contexts/ThemeContext';
import { CharactersListPage } from '.';
import api from '../../services/api';
jest.mock('../../services/api');

const renderWithTheme = (component: React.ReactNode) => {
  return render(<AppThemeProvider>{component}</AppThemeProvider>);
};

const mockedApi = api as jest.Mocked<typeof api>;

describe('CharactersListPage', () => {
  beforeEach(() => {
    mockedApi.get.mockResolvedValue({
      data: {
        data: {
          results: [
            {
              id: 1,
              name: 'Spider-Man',
              thumbnail: { path: 'path', extension: 'jpg' },
              series: { items: [] },
              events: { items: [] },
            },
          ],
        },
      },
    });
  });

  it('deve renderizar o título principal e concluir o loading', async () => {
    renderWithTheme(<CharactersListPage />);
    expect(await screen.findByText('Spider-Man')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Busca de personagens/i }),
    ).toBeInTheDocument();
  });

  it('deve buscar e renderizar uma lista de personagens', async () => {
    renderWithTheme(<CharactersListPage />);

    const characterName = await screen.findByText('Spider-Man');
    expect(characterName).toBeInTheDocument();
  });
});
