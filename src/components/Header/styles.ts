import styled from 'styled-components';

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.colors.inputBackground};
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: auto;
    transition: all 0.25s linear;

    background: ${({ theme }) =>
      theme.name === 'dark' ? '#e4ddddff' : 'transparent'};
    padding: ${({ theme }) => (theme.name === 'dark' ? '0.25rem' : '0')};
    border-radius: ${({ theme }) => (theme.name === 'dark' ? '4px' : '0')};
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CandidateInfo = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InitialsIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.9rem;
`;
