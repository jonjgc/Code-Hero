import React, { useCallback, useEffect, useState } from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import * as S from './styles';
import { Character } from '../../@types/api';
import api from '../../services/api';
import { Pagination } from '../../components/Pagination';

export const CharactersListPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCharacters = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const limit = 10;
      const offset = (page - 1) * limit;

      const response = await api.get('/characters', {
        params: { limit, offset },
      });

      setCharacters(response.data.data.results);
      setTotalPages(Math.ceil(response.data.data.total / limit));
    } catch (err) {
      console.error('Erro ao buscar personagens:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage, fetchCharacters]);

  return (
    <S.Wrapper>
      <S.Title>Busca de personagens</S.Title>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minHeight: '500px',
        }}
      >
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        )}
      </div>

      {!isLoading && totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      )}
    </S.Wrapper>
  );
};
