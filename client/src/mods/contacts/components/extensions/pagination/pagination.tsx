import * as S from "./styles";

type Props = {
  step: number;
  setStep: (value: number) => void;
  totalPages: number;
};

export const Pagination = ({ step, setStep, totalPages }: Props) => {
  const renderPages = () => {
    return [...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      return (
        <S.PaginationAction key={pageNumber} $isActive={pageNumber === step} onClick={() => setStep(pageNumber)}>
          {pageNumber}
        </S.PaginationAction>
      );
    });
  };

  return <S.PaginationWrapp>{renderPages()}</S.PaginationWrapp>;
};
