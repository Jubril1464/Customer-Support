import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useState } from "react";
const NewPassword: React.FC = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState({password: "", confirmPassword:""});
  function handleNavigate() {
    navigate(-1);
  }


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setNewPassword({...newPassword, [e.target.name]:e.target.value})
  }
  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    // setInfoProperty("forgotEmail", email);
    // setProperty({ key: "showScreen", value: "2" });
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
            <h2 className="text-[28px] text-center font-semibold text-[#27272E]">
              Set new password
            </h2>
            <h5 className="text-base text-center font-normal font-roboto text-[#27272E] ">
              Your password must be different from the previously used password.
            </h5>
          </div>
          <form className="flex flex-col gap-6 mt-12">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email-phoneNumber"
                className="text-[#425466] text-sm font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                className="py-2 px-4 rounded-md focus:outline-none border-none bg-[#EDF2F7] placeholder:text-[#7A828A] placeholder:text-sm font-inter placeholder:font-inter"
                placeholder="Type your new password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email-phoneNumber"
                className="text-[#425466] text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="passsword"
                name="confirmPassword"
                className="py-2 px-4 rounded-md focus:outline-none border-none bg-[#EDF2F7] placeholder:text-[#7A828A] placeholder:text-sm font-inter placeholder:font-inter"
                placeholder="Retype your new password"
                required
                onChange={handleChange}
              />
                <span className="text-sm font-inter text-[#718096] font-light">
                Must be 8 characters at least
              </span>
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
export default NewPassword;
