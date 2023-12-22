import React from "react";
import { MdDashboard, MdPerson } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiTwotoneProject } from "react-icons/ai";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface SideBarLinkProps {
  isToggled: boolean;
  sideBarItem: {
    title: string;
    path: string;
    logo: string;
  };
}

const SideBarLink: React.FC<SideBarLinkProps> = ({
  isToggled,
  sideBarItem,
}) => {
  const toggleClass = classNames({
    "flex items-center font-light py-2 hover:bg-neutral-300 hover:no-underline rounded-md text-neutral-600":
      true,
    "justify-center text-[1.2rem]": isToggled,
    "gap-2 px-3 text-base": !isToggled,
  });

  const iconWithLink = React.useMemo(() => {
    switch (sideBarItem?.logo) {
      case "Dashboard":
        return <MdDashboard />;

      case "Users":
        return <MdPerson />;

      case "Customers":
        return <BsPersonWorkspace />;

      case "Projects":
        return <AiTwotoneProject />;
    }
  }, [sideBarItem]);

  return (
    <Link to={sideBarItem.path} className={toggleClass}>
      {iconWithLink}
      {!isToggled && <p className="text-sm">{sideBarItem?.title}</p>}
    </Link>
  );
};

export default SideBarLink;
