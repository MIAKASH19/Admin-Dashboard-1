import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Chat, Cart, UserProfile, Notification } from ".";
import { useStateContext } from "../Contexts/ContextProvider";

const NavbarButton = ({ title, icon, color, dotColor, customFunc }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      className="hover:bg-light-gray dark:hover:bg-gray-700 flex p-3 items-center gap-1 text-xl rounded-full relative "
      onClick={customFunc}
      style={{ color }}
      type="button"
    >
      <span
        style={{ background: dotColor }}
        className="inline-flex h-2 w-2 right-2 absolute top-2 rounded-full"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between items-center p-2 md:mx-6 relative">
      <NavbarButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex items-center">
        <NavbarButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavbarButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavbarButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile">
          <div
            className="dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400">Hi,</span>{" "}
              <span className="font-normal text-14 text-gray-400 ml-1">
                Akash
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
