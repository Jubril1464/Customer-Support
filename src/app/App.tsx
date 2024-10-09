import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./signin";
import { AppProvider } from "@provider/contexts/AppContext";
import ForgotPassword from "./forgot-password";
import ModalContainer from "@component/ModalsContainer";
import { VisibilityProvider } from "@provider/contexts/VisibilityContext";

function App() {
  return (
    <>
      <VisibilityProvider>
        <AppProvider>
          <ModalContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route element={<Navigate to="/signin" replace />} index />
              </Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </VisibilityProvider>
    </>
  );
}

export default App;
