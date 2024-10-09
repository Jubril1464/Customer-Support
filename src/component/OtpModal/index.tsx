import { useRef, useState } from "react";
import Modal from "../Modal";
import { useVisibility } from "@provider/contexts/VisibilityContext";
import { Button } from "../Button";

export const OtpModal = () => {
  const {
    visibility: { showOtpModal },
    setModal,
  } = useVisibility();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = e;

    // Handle Backspace key
    if (key === "Backspace") {
      if (otp[index] !== "") {
        const newOtp = [...otp];
        newOtp[index] = ""; // Clear the current input
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus(); // Focus previous input
      }
    }
  };

  function handleClose() {
    setModal({ key: "showOtpModal", value: false });
  }
  return (
    <Modal
      open={showOtpModal}
      cancel={handleClose}
      className="bg-white px-20 py-8 w-[630px]"
    >
      <div className="flex flex-col gap-3 items-center font-inter">
        <h2 className="text-[28px] text-center font-semibold text-fontColor">
          OTP Login
        </h2>
        <h5 className="text-base text-center font-normal font-roboto text-fontColor ">
          Please provide the OTP sent to your email for login
        </h5>
      </div>
      <div className="mt-20 flex flex-col gap-2 ">
        <label htmlFor="otp" className="text-[#425466] text-sm font-medium">
          Enter OTP code
        </label>
        <div className="flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el!)}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl bg-[#EDF2F7] rounded-md focus:outline-none"
              type="text"
              inputMode="numeric"
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-[#425466] font-medium mt-5">
        OTP will resend in <span className="font-bold text-black">2:00</span>
      </p>
      <p className="text-sm text-[#425466] font-medium mt-8">
        Didn't get OTP?{" "}
        <span className="text-primaryColor cursor-pointer" role="button">
          Resend
        </span>
      </p>
      <div className="mt-10">
        <Button as="btn" size="full">
          Sign in
        </Button>
      </div>
    </Modal>
  );
};
