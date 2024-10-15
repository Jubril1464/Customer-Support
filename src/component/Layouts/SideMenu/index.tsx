import { NavLink,useLocation } from "react-router-dom";
import { useMenu } from "@hooks/useMenu";
import { useEffect, useState } from "react";
function SideMenu() {
  const { menu } = useMenu();
  const [selected, setSelected] = useState<string | undefined>();
  const {pathname} = useLocation()

  useEffect(() => {
    setSelected(pathname.split('/').pop())
   
  }, [pathname]);
  return (
    <ul className="space-y-5">
      {menu.map((item) => (
        <li>
          <NavLink
            to={item.link}
            className={`flex items-center gap-3 capitalize text-xl rounded-lg duration-200 p-3 hover:bg-secondaryColor ${
              selected === item.name
                ? "bg-secondaryColor font-semibold text-primaryColor"
                : "bg-transparent text-[#718096]"
            }`}
          >
            {selected === item.name ? item.selectedLogo : item.logo}&nbsp;
            <span>{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SideMenu;
