import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import MainPage from "./page/MainPage";
import MyPage from "./page/MyPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/My" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
