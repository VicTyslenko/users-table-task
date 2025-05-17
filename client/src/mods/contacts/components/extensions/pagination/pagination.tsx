import * as S from "./styles";
import { usePagination } from "./hooks";
import { ArrowBackIcon } from "../../../../../assets/icons/arrow-back-icon";
import { ArrowForwardIcon } from "../../../../../assets/icons/arrow-forward-icon";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const { step, handleSetSearchParameters, handleBack, handleForward } = usePagination(totalPages);

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

  return (
    <S.PaginationWrapp>
      <S.PaginationAction onClick={handleBack}>
        <ArrowBackIcon />
      </S.PaginationAction>

      {renderPages()}
      <S.PaginationAction onClick={handleForward}>
        <ArrowForwardIcon />
      </S.PaginationAction>
    </S.PaginationWrapp>
  );
};
