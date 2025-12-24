import { Button } from "@heroui/button";
import { NavLink } from "react-router-dom";

const DashboadsList = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex items-center justify-between">
        <h6 className="text-[#6A7282] text-[12px] uppercase">Dashboards</h6>
        <Button
          variant="light"
          className="!p-[8px] !w-auto !h-auto min-w-[24px] "
        >
          <img
            alt="dashboard icon"
            className="w-[20px] h-[20px]"
            src="/assets/svgs/plus.svg"
          />
        </Button>
      </div>
      <NavLink
        to={"/dashboard"}
        className="flex gap-3 items-center text-[#6A7282] text-[14px]  hover:bg-[#F9FAFB] hover:text-[#364153]  rounded-[12px] p-[10px]"
      >
        <img
          alt="dashboard icon"
          className="w-[20px] h-[20px]"
          src="/assets/svgs/dashboard-squares.svg"
        />
        <span>Dashboard 1</span>
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className="flex gap-3 items-center text-[#6A7282] text-[14px]  hover:bg-[#F9FAFB] hover:text-[#364153]  rounded-[12px] p-[10px]"
      >
        <img
          alt="dashboard icon"
          className="w-[20px] h-[20px]"
          src="/assets/svgs/dashboard-squares.svg"
        />
        <span>Dashboard 2</span>
      </NavLink>
    </div>
  );
};

export default DashboadsList;
