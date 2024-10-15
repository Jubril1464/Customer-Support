import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./signin";
import { AppProvider } from "@provider/contexts/AppContext";
import ForgotPassword from "./forgot-password";
import ModalContainer from "@component/ModalsContainer";
import { VisibilityProvider } from "@provider/contexts/VisibilityContext";
import { Notifier } from "react-pop-notifier";
import Dashboard from "./dashboard";
import Overview from "./dashboard/overview";
import Customers from "./dashboard/customers";
import DisputeRequest from "./dashboard/dispute";
import TeamAudit from "./dashboard/team-audit";

function App() {
  return (
    <>
      <Notifier />
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
              <Route element={<Dashboard />} path="dashboard">
                <Route index element={<Navigate to="overview" replace />} />
                <Route path="overview" element={<Overview />} />
                <Route path="customers" element={<Customers />} />
                <Route path="dispute-request" element={<DisputeRequest />} />
                <Route path="team-audit" element={<TeamAudit />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </VisibilityProvider>
    </>
  );
}

export default App;
