import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const SearchLabel = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
`;

export const ListHeader = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 3fr 3fr;
    gap: 2rem;
    padding: 0 1rem;
    margin-bottom: 0.5rem;
    color: #9e9e9e;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;
