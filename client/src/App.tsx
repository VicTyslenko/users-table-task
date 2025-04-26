import { AppStyles } from "./styles/app";
import { GlobalStyles } from "./styles/global";
import { Contacts } from "./pages/contacts";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Contacts />
      </AppStyles>
    </>
  );
};
