import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import * as S from './styles';

export const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.Logo>Objective</S.Logo>
      <button onClick={toggleTheme}>Mudar Tema</button>
    </S.Wrapper>
  );
};
