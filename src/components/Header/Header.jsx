import React from "react";
import { LeftHeader } from "./LeftHeader";
import { RightHeader } from "./SubComponent/RightHeader";

const Header = () => {
  return (
    <div className="header">
      <div>
        <LeftHeader />
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;
