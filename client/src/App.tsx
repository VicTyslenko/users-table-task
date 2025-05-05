import { AppStyles } from "./styles/app";
import { GlobalStyles } from "./styles/global";
import { Contacts } from "./pages/contacts";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppStyles>
        <Contacts />
      </AppStyles>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
};
