import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
