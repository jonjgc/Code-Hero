import React from 'react';
import * as S from './styles';

interface CharacterCardProps {
  name: string;
  imageUrl: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  imageUrl,
}) => {
  return (
    <S.CardWrapper>
      <S.CharacterInfo>
        <S.Avatar src={imageUrl} alt={name} />
        <p>{name}</p>
      </S.CharacterInfo>

      <S.Series>
        <p>Iron Man: Armor Wars</p>
        <p>Fantastic Four Visionaries: Walter Simonson Vol. 1</p>
      </S.Series>

      <S.Events>
        <p>AvX</p>
        <p>Demon in the Bottle</p>
      </S.Events>
    </S.CardWrapper>
  );
};
