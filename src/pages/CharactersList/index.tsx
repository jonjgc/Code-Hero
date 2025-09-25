import React, { useEffect, useState } from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import * as S from './styles';
import { Character } from '../../@types/api';
import api from '../../services/api';

export const CharactersListPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get('/characters', {
          params: {
            limit: 10,
          },
        });
        setCharacters(response.data.data.results);
      } catch (err) {
        console.error('Erro ao buscar personagens:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);
  return (
    <S.Wrapper>
      <S.Title>Busca de personagens</S.Title>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        )}
      </div>
    </S.Wrapper>
  );
};
