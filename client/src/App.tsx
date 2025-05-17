import { GlobalStyles } from "./styles/global";
import { Contacts } from "./pages/contacts";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Fonts } from "./styles/fonts";

export const App = () => {
  return (
    <BrowserRouter>
      <Fonts />
      <GlobalStyles />
      <Contacts />
      <Toaster position="top-center" />
    </BrowserRouter>
  );
};
