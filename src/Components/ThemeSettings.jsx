import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";
import { RiGitBranchFill } from "react-icons/ri";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen p-3 dark:text-gray-200 bg-white dark:bg-main-dark-bg w-400">
        <div className="flex items-center justify-between ml-4 py-2">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: currentColor, borderRadius: "50%" }}
            className=" bg-white hover:drop-shadow-xl text-2xl p-3 hover:bg-light-gray dark:bg-transparent dark:hover:bg-gray-700"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color py-4 ml-4">
          <p className="font-semibold text-lg">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="light"
              value="Light"
              className="mr-2 cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="dark"
              value="Dark"
              className="mr-2 cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color py-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="rounded-full h-10 w-10 cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
