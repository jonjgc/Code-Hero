import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  padding-right: 3rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text};
`;
