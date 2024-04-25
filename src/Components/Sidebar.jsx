import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink = "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2"
  const normalLink = "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-800 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"

  return (
    <div className="ml-5 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-center gap-3 flex text-xl mt-1 ml-3 dark:text-white text-slate-900 font-bold tracking-tighter uppercase">
              <SiShopware className="text-3xl"/>
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" className="text-xl rounded-full p-3 hover:bg-light-gray mt-1 md:hidde block ">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-5">
            {links.map((item)=>(
              <div>
                <p className="text-gray-400 dark:text-gray-400 mt-4 m-3 uppercase">{item.title}</p>
                {item.links.map((link)=>(
                  <NavLink
                  to={`${link.name}`} 
                  className={({isActive})=>(isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}super Nova</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
