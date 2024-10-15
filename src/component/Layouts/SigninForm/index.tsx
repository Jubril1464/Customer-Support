import { LiaAngleLeftSolid } from "react-icons/lia";
import { Button } from "../../Button";
import { useApp } from "@provider/contexts/AppContext";
import { Link } from "react-router-dom";
import { useVisibility } from "@provider/contexts/VisibilityContext";
import { useState } from "react";
import { inputValidator } from "@utils/helpers";
import { useNotifier } from "react-pop-notifier";

export const SigninForm = () => {
  const { setInfoProperty } = useApp();
  const { notifier } = useNotifier();
  const { setModal, setProperty } = useVisibility();
  const [loginDetails, setLoginDetails] = useState({
    email_phoneNumber: "",
    password: "",
  });

  function handleBack() {
    setInfoProperty("userType", "");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  }
  const handleLogin = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validation = inputValidator(loginDetails);
    if (!validation.isValidated)
      notifier.show(validation.message, "Error", "Validation response");
    else setModal({ key: "showOtpModal", value: true });
  };
  return (
    <div className="flex gap-5 justify-center items-center h-full font-inter">
      <div className="flex gap-5 justify-center">
        <span
          className="h-8 w-8 border border-[#E4ECF7] rounded-md flex justify-center items-center cursor-pointer"
          role="button"
          onClick={handleBack}
        >
          <LiaAngleLeftSolid />
        </span>
        <div className="border border-[#E2E8F0] rounded-lg w-[530px] p-8 h-[600px]">
          <div className="space-y-2">
            <h2 className="text-2xl text-center font-semibold text-[#27272E]">
              Sign in
            </h2>
            <h5 className="text-sm text-center font-normal font-roboto text-[#27272E] ">
              Let's continue the good work
            </h5>
          </div>
          <form className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email_phoneNumber"
                className="text-[#425466] text-sm font-medium"
              >
                E-mail or phone number
              </label>
              <input
                type="text"
                id="email_phoneNumber"
                name="email_phoneNumber"
                className="py-2 px-4 rounded-md focus:outline-none border-none bg-[#EDF2F7] placeholder:text-[#7A828A] placeholder:text-sm font-inter placeholder:font-inter"
                placeholder="Type your e-mail or phone number"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-[#425466] text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="py-2 px-4 rounded-md focus:outline-none border-none bg-[#EDF2F7] placeholder:text-[#7A828A] placeholder:text-sm font-inter placeholder:font-inter"
                placeholder="Type your password"
                onChange={handleChange}
              />
              <span className="text-[11px] text-[#718096] font-roboto">
                Must be 8 characters at least
              </span>
            </div>
            <div>
              <Button as="btn" size="full" onClick={handleLogin}>
                Sign in
              </Button>
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="text-primaryColor text-xs"
                role="button"
                onClick={() => setProperty({ key: "showScreen", value: "1" })}
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
