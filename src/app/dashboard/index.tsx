import Logo from '@assets/svgs/logo-blue.svg'
import SideMenu from '@component/Layouts/SideMenu';
import { CiCircleQuestion } from "react-icons/ci";
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="grid grid-cols-20 h-screen font-inter">
      <div className="flex flex-col justify-between h-full py-10 px-5 bg-[#edf2f783]">
        <img src={Logo} alt="logo" className="h-8 w-8" />
        <span>
          <CiCircleQuestion size={32} />
        </span>
      </div>
      <div className="col-span-3 py-11 border-x-2 border-[#CBD5E0] text-center bg-[#edf2f783]">
        <h4 className="text-lg uppercase font-semibold text-[#425466]">
          Customer Support
        </h4>
        <div className="mt-10 px-5">
          <SideMenu />
        </div>
      </div>
      <div >
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
