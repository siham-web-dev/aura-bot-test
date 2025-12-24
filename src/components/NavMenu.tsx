import { Button } from "@heroui/button";
import NewThread from "./NewThread";
import SearchThread from "./SearchThread";
import { Divider } from "@heroui/divider";
import DashboadsList from "./DashboadsList";
import AvatarDropdown from "./AvatarDropdown";
import HistoryList from "./HistoryList";

const NavMenu = () => {
  return (
    <div className="flex flex-col gap-[12px] bg-white p-[16px] h-full overflow-x-hidden overflow-y-auto border-r border-[#E5E7EB]">
      <div className="flex items-center justify-between">
        <img
          alt="aura logo"
          className="w-[40px] h-[40px]"
          src="/assets/svgs/logo.svg"
        />
        <Button
          className="!rounded-full !p-[8px] !w-auto !h-auto min-w-[24px] !shadow-[0px_1px_3px_0px_#0000001A]"
          variant="light"
        >
          <img
            alt="dashboard icon"
            className="w-[16px] h-[16px]"
            src="/assets/svgs/reduce.svg"
          />
        </Button>
      </div>
      <NewThread />
      <SearchThread />
      <HistoryList />
      <Divider />
      <DashboadsList />
      <AvatarDropdown />
    </div>
  );
};

export default NavMenu;
