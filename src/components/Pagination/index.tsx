import React from 'react';
import * as S from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1,
  );

  return (
    <S.Nav>
      <S.PageButton
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </S.PageButton>

      <S.PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </S.PageButton>

      <S.PageNumbersWrapper>
        {pages.map((page) => (
          <S.PageButton
            key={page}
            $isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </S.PageButton>
        ))}
      </S.PageNumbersWrapper>

      <S.PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </S.PageButton>

      <S.PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </S.PageButton>
    </S.Nav>
  );
};
