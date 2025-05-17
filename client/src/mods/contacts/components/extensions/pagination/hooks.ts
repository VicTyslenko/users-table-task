import { useSearchParams } from "react-router-dom";

export const usePagination = (totalPages: number) => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const step = Number(searchParameters.get("step"));

  const handleSetSearchParameters = (newValue: string) => {
    setSearchParameters((searchParameters) => {
      searchParameters.set("step", String(newValue));
      return searchParameters;
    });
  };

  const handleBack = () => {
    if (step <= 1) return;

    setSearchParameters((searchParams) => {
      searchParams.set("step", String(step - 1));

      return searchParams;
    });
  };

  const handleForward = () =>
    setSearchParameters((searchParams) => {
      if (step < totalPages) searchParams.set("step", String(step + 1));

      return searchParams;
    });

  return { step, handleSetSearchParameters, handleBack, handleForward };
};
