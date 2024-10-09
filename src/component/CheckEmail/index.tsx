import { LiaAngleLeftSolid } from "react-icons/lia";
import { Button } from "../Button";
import { Email } from "@assets/icons/email";
import { useApp } from "@provider/contexts/AppContext";
import { useVisibility } from "@provider/contexts/VisibilityContext";



const CheckEmail = () => {
  const {info} = useApp();
  const {setProperty} = useVisibility()
  function handleClick() {
    setProperty({ key: "showScreen", value: "3" });
  }
  return (
    <div className="flex gap-5 justify-center items-center h-[90%]">
      <div className="flex gap-5 justify-center">
        <span
          className="h-8 w-8 border border-[#E4ECF7] rounded-md flex justify-center items-center cursor-pointer"
          role="button"
          onClick={handleClick}
        >
          <LiaAngleLeftSolid />
        </span>
        <div className="border border-[#E2E8F0] rounded-lg w-[530px] p-8 h-[600px]">
          <div className="space-y-2">
            <span className="w-16 h-16 rounded-full bg-[#E1E8FF] grid place-items-center mx-auto">
              <Email />
            </span>
            <h2 className="text-[28px] text-center font-semibold text-[#27272E]">
              Check Email
            </h2>
            <h5 className="text-base text-center font-normal font-roboto text-[#27272E]">
              We sent a password reset link to {info?.forgotEmail}
            </h5>
          </div>
          <div className="mt-12">
            <Button as="btn" size="full" onClick={handleClick}>
              Open your email
            </Button>
          </div>
          <div className="mt-5">
            <Button
              as="link"
              to="/signin"
              className="text-[#505780] text-sm font-semibold"
            >
              <LiaAngleLeftSolid />
              <span>Back to Login</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
