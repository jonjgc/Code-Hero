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

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
