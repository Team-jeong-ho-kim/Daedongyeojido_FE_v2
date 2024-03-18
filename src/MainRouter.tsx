import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.style";
import MyPage from "./page/MyPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/My" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
