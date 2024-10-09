import LogoWhite from "../../assets/svgs/logo-white.svg";
import LogoBlue from "../../assets/svgs/logo-blue.svg";

interface ILogo {
  color?: string;
  size?: string;
  className?: string;
}
export const Logo = ({ color = "white", size = "32", className }: ILogo) => {
  return (
    <div>
      <img
        src={color === "white" ? LogoWhite : LogoBlue}
        alt="logo"
        className={`w-[${size}] h-[${size}] ${className}`}
      />
    </div>
  );
};
