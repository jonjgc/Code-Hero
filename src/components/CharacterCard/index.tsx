import React from 'react';
import { Character } from '../../@types/api';
import * as S from './styles';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { name, thumbnail, series, events } = character;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <S.CardWrapper>
      <S.CharacterInfo>
        <S.Avatar src={imageUrl} alt={name} />
        <p>{name}</p>
      </S.CharacterInfo>

      <S.Series>
        {series.items.slice(0, 3).map((item) => (
          <p key={item.name}>{item.name}</p>
        ))}
      </S.Series>

      <S.Events>
        {events.items.slice(0, 3).map((item) => (
          <p key={item.name}>{item.name}</p>
        ))}
      </S.Events>
    </S.CardWrapper>
  );
};
