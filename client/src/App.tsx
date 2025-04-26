import { AppStyles } from "./styles/app";
import { GlobalStyles } from "./styles/global";
import { Contacts } from "./pages/contacts";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Contacts />
      </AppStyles>
      <Toaster position="top-center" />
    </>
  );
};
