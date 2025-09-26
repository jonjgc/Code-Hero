import React, { useCallback, useEffect, useState } from 'react';
import { CharacterCard } from '../../components/CharacterCard';
import * as S from './styles';
import { Character } from '../../@types/api';
import api from '../../services/api';
import { Pagination } from '../../components/Pagination';
import { SearchInput } from '../../components/SearchInput';
import { useDebounce } from '../../hooks/useDebounce';

export const CharactersListPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchCharacters = useCallback(async (page: number, search: string) => {
    setIsLoading(true);
    try {
      const limit = 10;
      const offset = (page - 1) * limit;

      const params: { limit: number; offset: number; nameStartsWith?: string } =
        {
          limit,
          offset,
        };

      if (search) {
        params.nameStartsWith = search;
      }

      const response = await api.get('/characters', { params });

      setCharacters(response.data.data.results);
      setTotalPages(Math.ceil(response.data.data.total / limit));
    } catch (err) {
      console.error('Erro ao buscar personagens:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters(currentPage, debouncedSearchTerm);
  }, [currentPage, debouncedSearchTerm, fetchCharacters]);

  useEffect(() => {
    if (debouncedSearchTerm && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [currentPage, debouncedSearchTerm]);

  return (
    <S.Wrapper>
      <S.Title>Busca de personagens</S.Title>
      <S.SearchLabel htmlFor="search">Nome do personagem</S.SearchLabel>
      <SearchInput id="search" value={searchTerm} onChange={setSearchTerm} />
      <S.ListHeader>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </S.ListHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minHeight: '500px',
        }}
      >
        {isLoading ? (
          <S.NotFoundContainer>
            <p>Carregando...</p>
          </S.NotFoundContainer>
        ) : characters.length > 0 ? (
          characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <S.NotFoundContainer>
            <p>Nenhum personagem encontrado.</p>
          </S.NotFoundContainer>
        )}
      </div>
      {!isLoading && characters.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      )}
    </S.Wrapper>
  );
};
