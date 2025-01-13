import React from "react";

interface ISidebarWrapper {}

const SidebarWrapper: React.FC<ISidebarWrapper> = () => {
  return <nav className="custom-sidebar-styling">SidebarWrapper</nav>;
};

export default SidebarWrapper;
