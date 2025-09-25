import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './index';
import { AppThemeProvider } from '../../contexts/ThemeContext';

const renderWithTheme = (component: React.ReactNode) => {
  return render(<AppThemeProvider>{component}</AppThemeProvider>);
};

describe('Pagination Component', () => {
  const onPageChangeMock = jest.fn();

  beforeEach(() => {
    onPageChangeMock.mockClear();
  });

  it('deve chamar onPageChange quando algum número da paginação for clicado', () => {
    renderWithTheme(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('deve chamar onPageChange com a última página quando o botão da última página for clicado', () => {
    renderWithTheme(
      <Pagination
        currentPage={3}
        totalPages={50}
        onPageChange={onPageChangeMock}
      />,
    );

    const lastPageButton = screen.getByText('>>');
    fireEvent.click(lastPageButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(50);
  });

  it('deve chamar onPageChange com a primeira página quando o botão da primeira página for clicado', () => {
    renderWithTheme(
      <Pagination
        currentPage={5}
        totalPages={50}
        onPageChange={onPageChangeMock}
      />,
    );

    const firstPageButton = screen.getByText('<<');
    fireEvent.click(firstPageButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it('deve ter os botões "primeiro" e "anterior" desabilitados na primeira página', () => {
    renderWithTheme(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    expect(screen.getByText('<<')).toBeDisabled();
    expect(screen.getByText('<')).toBeDisabled();
  });
});
