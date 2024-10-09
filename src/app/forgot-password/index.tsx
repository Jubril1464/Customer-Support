import { Header } from "@component/Layouts/Header";
import ForgotPasswordForm from "@component/ForgotPasswordForm";
import { useVisibility } from "@provider/contexts/VisibilityContext";
import CheckEmail from "@component/CheckEmail";
import NewPassword from "@component/NewPassword";
import { getFullYear } from "../../utils/utility";

const ForgotPassword: React.FC = () => {
  const { visibility } = useVisibility();
  return (
    <div className="px-14 h-screen font-inter relative">
      <Header />
      {visibility.showScreen === "1" ? (
        <ForgotPasswordForm />
      ) : visibility.showScreen === "2" ? (
        <CheckEmail />
      ) : (
        <NewPassword />
      )}

      <div className="border-t-[1px] border-[#E2E8F0] flex py-3 -mt-12">
        <span className="font-sm text-[#425466]">Crendly Support {getFullYear()}</span>
      </div>
    </div>
  );
};
export default ForgotPassword;
