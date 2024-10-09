import { Padlock } from "@assets/icons/padlock";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useVisibility } from "@provider/contexts/VisibilityContext";
import { useState } from "react";
import { useApp } from "@provider/contexts/AppContext";
const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const { setProperty } = useVisibility();
  const { setInfoProperty } = useApp();
  const [email, setEmail] = useState<string>("");
  function handleNavigate() {
    navigate(-1);
  }

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInfoProperty("forgotEmail", email);
    setProperty({ key: "showScreen", value: "2" });
  }
  return (
    <div className="flex gap-5 justify-center items-center h-[90%]">
      <div className="flex gap-5 justify-center">
        <span
          className="h-8 w-8 border border-[#E4ECF7] rounded-md flex justify-center items-center cursor-pointer"
          role="button"
          onClick={handleNavigate}
        >
          <LiaAngleLeftSolid />
        </span>
        <div className="border border-[#E2E8F0] rounded-lg w-[530px] p-8 h-[600px]">
          <div className="space-y-2">
            <span className="w-16 h-16 rounded-full bg-[#E1E8FF] grid place-items-center mx-auto">
              <Padlock />
            </span>
            <h2 className="text-[28px] text-center font-semibold text-[#27272E]">
              Forgot Password
            </h2>
            <h5 className="text-base text-center font-normal font-roboto text-[#27272E] ">
              A reset password email will be sent to you.
            </h5>
          </div>
          <form className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email-phoneNumber"
                className="text-[#425466] text-sm font-medium"
              >
                E-mail
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded-md focus:outline-none border-none bg-[#EDF2F7] placeholder:text-[#7A828A] placeholder:text-sm font-inter placeholder:font-inter"
                placeholder="Type your e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Button as="btn" size="full" onClick={handleClick}>
                Reset password
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
