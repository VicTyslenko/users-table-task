import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const step = Number(searchParameters.get("step"));

  const handleSetSearchParameters = (newValue: string) => {
    setSearchParameters((searchParameters) => {
      searchParameters.set("step", String(newValue));
      return searchParameters;
    });
  };

  return { step, handleSetSearchParameters };
};
