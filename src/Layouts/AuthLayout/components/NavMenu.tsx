import React from "react";
import SideBarLink from "./SideBarLink ";
import BottomSideBar from "./BottomSideBar";
import Logo from "../../../img/logo.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import classNames from "classnames";
import { Avatar, Box, Divider, Paper, useTheme } from "@mui/material";

const sideBarItems = [
  { title: "Dashboard", path: "/home", logo: "Dashboard" },
  { title: "Customers", path: "/customers", logo: "Customers" },
  { title: "Projects", path: "/projects", logo: "Projects" },
  { title: "Users", path: "/users", logo: "Users" },
];

const NavMenu = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const theme = useTheme();

  const toggleClass = classNames({
    "flex flex-col p-3 relative duration-300": true,
    "w-14": isToggled,
  });

  return (
    <Paper elevation={0} className={toggleClass}>
      <Avatar
        onClick={() => setIsToggled(!isToggled)}
        sx={{
          height: "1.7rem",
          width: "1.7rem",
          position: "absolute",
          right: "-0.7rem",
          top: 50,
          bgcolor: theme.palette.secondary.dark,
          cursor: "pointer",
        }}
      >
        {isToggled ? (
          <IoIosArrowRoundForward size={25} />
        ) : (
          <IoIosArrowRoundBack size={25} />
        )}
      </Avatar>
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="flex-1 py-7 flex flex-col gap-1">
        {sideBarItems.map((item) => {
          return (
            <SideBarLink
              key={item.title}
              isToggled={isToggled}
              sideBarItem={item}
            />
          );
        })}
      </div>
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-1 pt-2 ">
        <BottomSideBar isToggled={isToggled} />
      </div>
    </Paper>
  );
};

export default NavMenu;
