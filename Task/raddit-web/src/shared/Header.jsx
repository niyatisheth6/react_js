import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LogoHeading } from "../assets/images/logoHeading.svg";
import { ReactComponent as Search } from "../assets/images/search.svg";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as DownArrow } from "../assets/images/downArrow.svg";

import Button from "./Button";

function Header() {
  return (
    <div className="py-2 px-4 shadow-xl flex justify-between">
      <div className="flex gap-2 items-center">
        <Logo />
        <LogoHeading />
      </div>
      <div className="relative  max-w-[654px] w-full ">
        <div className="absolute top-[11px] left-[16px] ">
          {" "}
          <Search />
        </div>
        <input className="form_input " placeholder="Search Reddit" />
      </div>
      <div className=" flex justify-center items-center gap-3 00">
        <Button title="Get App" btn="bg-cultured hover:bg-gray-500" />
        <Button title="Log in" btn="bg-redorange hover:bg-gray-500" />
        <div>
          <div>
            <button type="button" className="dropdown_btn items-center">
              <User />
              <DownArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
