import { HeaderProps } from "@component/types";
import { Alarm } from "@assets/index";
import Avatar from "@assets/imgs/x-avatar.png";
import { LiaAngleDownSolid } from "react-icons/lia";

function DashboardHeader({ title }: HeaderProps) {
  return (
    <header className="flex justify-between px-10 font-inter border-b border-borderColor h-20 items-center">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="flex gap-10 items-center">
        <span role="button">
          <Alarm />
        </span>
        <div className="flex items-center gap-3">
          <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-normal text-[#425466]">Davis</span>
          <span role="button">
            <LiaAngleDownSolid color="#425466" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
