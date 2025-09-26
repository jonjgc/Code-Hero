import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import * as S from './styles';
import { Sun } from '@styled-icons/boxicons-solid/Sun';
import { Moon } from '@styled-icons/boxicons-solid/Moon';
import logoSvg from '../logo/logo.svg';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <img src={logoSvg} alt="Objective Logo" />
      </S.LogoWrapper>
      <S.HeaderControls>
        <S.CandidateInfo>
          Francisco Jônatas - Teste de Front-end
        </S.CandidateInfo>
        <S.InitialsIcon>FJ</S.InitialsIcon>
        <S.ThemeToggleButton onClick={toggleTheme} aria-label="Mudar tema">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </S.ThemeToggleButton>
      </S.HeaderControls>
    </S.Wrapper>
  );
};
