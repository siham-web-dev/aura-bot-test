import NavMenu from "./NavMenu";

const DesktopSidebar = () => {
  return (
    <div className="w-full max-w-[240px] hidden md:flex">
      <NavMenu />
    </div>
  );
};

export default DesktopSidebar;
