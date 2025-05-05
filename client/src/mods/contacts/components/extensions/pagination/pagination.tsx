import * as S from "./styles";
import { usePagination } from "./hooks";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const { step, handleSetSearchParameters } = usePagination();

  const renderPages = () => {
    return [...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;

      return (
        <S.PaginationAction key={pageNumber} $isActive={pageNumber === step} onClick={() => handleSetSearchParameters(String(pageNumber))}>
          {pageNumber}
        </S.PaginationAction>
      );
    });
  };

  return <S.PaginationWrapp>{renderPages()}</S.PaginationWrapp>;
};
