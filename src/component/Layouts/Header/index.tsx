import LogoBlue from "@assets/svgs/logo-blue.svg";
import { useApp } from "@provider/contexts/AppContext";
export const Header: React.FC = () => {
  const { info } = useApp();
  return (
    <header className="p-5 flex justify-between items-center border-b-[1px] border-[#E2E8F0]">
      <div>
        <img src={LogoBlue} alt="logo" />
      </div>
      <span className="text-sm">{info?.userType}</span>
    </header>
  );
};
