import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const HideOnMobile = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Series = styled(HideOnMobile)``;
export const Events = styled(HideOnMobile)``;

export const CharacterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
