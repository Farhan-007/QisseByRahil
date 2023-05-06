import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;