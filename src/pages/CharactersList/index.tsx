import React from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import * as S from './styles';

export const CharactersListPage: React.FC = () => {
  const mockCharacters = [
    {
      name: 'Bruce Banner',
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_fantastic.jpg',
    },
    {
      name: 'Daniel Ketch',
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/3/20/523215f073215/standard_fantastic.jpg',
    },
    {
      name: 'Harry Osborn',
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/3/50/53176a6b2253e/standard_fantastic.jpg',
    },
  ];
  return (
    <S.Wrapper>
      <S.Title>Busca de personagens</S.Title>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockCharacters.map((char) => (
          <CharacterCard
            key={char.name}
            name={char.name}
            imageUrl={char.imageUrl}
          />
        ))}
      </div>
    </S.Wrapper>
  );
};
