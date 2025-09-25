import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Character, Comic } from '../../@types/api';
import * as S from './styles';

export const CharacterDetailPage: React.FC = () => {
  const { characterId } = useParams<{ characterId: string }>();

  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!characterId) return;

    const fetchData = async () => {
      try {
        const [characterResponse, comicsResponse] = await Promise.all([
          api.get(`/characters/${characterId}`),
          api.get(`/characters/${characterId}/comics`, {
            params: { limit: 10 },
          }),
        ]);

        setCharacter(characterResponse.data.data.results[0]);
        setComics(comicsResponse.data.data.results);
      } catch (error) {
        console.error('Erro ao buscar detalhes do personagem', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [characterId]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!character) {
    return <p>Personagem não encontrado.</p>;
  }

  return (
    <S.Wrapper>
      <S.BackButton to="/">Voltar</S.BackButton>
      <S.Content>
        <S.CharacterImage
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <S.CharacterInfo>
          <S.CharacterName>{character.name}</S.CharacterName>
          <S.CharacterDescription>
            {character.description || 'Descrição não disponível.'}
          </S.CharacterDescription>

          <S.SectionTitle>Quadrinhos</S.SectionTitle>
          <S.ComicsList>
            {comics.map((comic) => (
              <S.ComicItem key={comic.id}>
                <S.ComicImage
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <S.ComicTitle>{comic.title}</S.ComicTitle>
              </S.ComicItem>
            ))}
          </S.ComicsList>
        </S.CharacterInfo>
      </S.Content>
    </S.Wrapper>
  );
};
