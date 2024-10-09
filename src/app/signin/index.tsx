import { Logo, UserType, SigninForm } from "../../component";
import WelcomeScreen from "../../assets/imgs/welcome-screen.png";
import { useApp } from "../../provider/contexts/AppContext";
import { getFullYear } from "../../utils/utility";

const SignIn = () => {
  const { info} = useApp();
  return (
    <div className="grid grid-cols-6 p-5 h-screen font-inter text-black gap-10">
      <div className="col-span-2 bg-primaryColor rounded-lg py-8 px-12 grid grid-rows-4 gap-5 relative">
        <Logo color="white" className="absolute left-6" />
        <div className="self-center flex-1 row-span-2 justify-self-center">
          <img src={WelcomeScreen} alt="" />
        </div>
        <h1 className="font-roboto text-4xl text-white font-semibold">
          Welcome to Crendly Support Panel
        </h1>
      </div>

      <div className="relative col-span-4 px-16">
        <span className="text-sm absolute right-14 top-2">
          {info.userType ? info.userType : "Got questions?"}
        </span>
        {info.userType ? (
         <SigninForm />
        ) : (
          <UserType />
        )}
        <div className="-mt-5 flex flex-col gap-3 w-full">
          <div className="w-full h-[1px] bg-[#EDF2F7]"></div>
          <span className="text-[#425466] uppercase text-sm font-medium tracking-widest	">
            Crendly support panel {getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
