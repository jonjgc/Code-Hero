import React from 'react';
import { Search } from '@styled-icons/boxicons-regular/Search';
import * as S from './styles';

interface SearchInputProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  id,
  value,
  onChange,
}) => {
  return (
    <S.Wrapper>
      <S.Input
        id={id}
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <S.IconWrapper>
        <Search size={24} />
      </S.IconWrapper>
    </S.Wrapper>
  );
};
