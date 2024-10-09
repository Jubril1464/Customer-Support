import { useUserType } from "@hooks/useUserType";
import { useApp } from "@provider/contexts/AppContext";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Button } from "../../Button";
import { useState } from "react";
export function UserType() {
  const { userType } = useUserType();
  const { setInfoProperty } = useApp();
  const [selectedUser, setSelectedUser] = useState<string>("");

  function handleUserType() {
    setInfoProperty("userType", selectedUser);
  }

  return (
    <div className="flex flex-col justify-center h-full gap-6 font-inter">
      <h4 className="text-xl font-medium">Choose your user type</h4>
      <div className="grid grid-cols-4 grid-rows-2 h-[530px] gap-x-4 gap-y-6">
        {userType.map((user) => (
          <div
            className={`border rounded-lg border-[#E2E8F0] px-5 py-10 flex flex-col gap-5 justify-center items-center duration-75 transition-all cursor-pointer ${
              selectedUser === user.name ? "shadow-md" : null
            }`}
            key={user.name}
            role="button"
            onClick={() => setSelectedUser(user.label)}
          >
            <div
              className={`h-[67px] w-[67px] rounded-full ${
                selectedUser === user.name ? "bg-[#E1E8FF]" : "bg-[#FAFAFA]"
              } grid place-items-center`}
            >
              {selectedUser === user.name ? user.selectedLogo : user.logo}
            </div>
            <span
              className={`${
                selectedUser === user.name ? "text-black" : "text-[#4A5568]"
              }`}
            >
              {user.label}
            </span>
          </div>
        ))}
      </div>
      <div>
        <Button
          as="btn"
          size="md"
          bgColor={selectedUser ? "bg-[#4C6FFF]" : "bg-[#EDF2F7]"}
          hoverBgColor={selectedUser ? "bg-[#4C6FFF]" : "bg-[#EDF2F7]"}
          disabled={!selectedUser ? true : false}
          color={selectedUser ? "text-white" : "text-black"}
          onClick={handleUserType}
        >
          Continue <LiaAngleRightSolid />
        </Button>
      </div>
    </div>
  );
}
