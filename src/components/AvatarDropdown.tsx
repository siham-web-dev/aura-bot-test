import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";

const AvatarDropdown = () => {
  return (
    <div className="mt-auto">
      <Dropdown>
        <DropdownTrigger>
          <div className="flex gap-3 items-center cursor-pointer">
            <Avatar src="/assets/pngs/avatar.png" />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[14px] text-[#101828]">Ilyes Boudjelthia</p>
              <small className="text-[12px] text-[#6A7282]">
                iboudjelthia@futuretail.ai
              </small>
            </div>
          </div>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="user settings"
          className="py-1"
          onAction={(key) => alert(key)}
        >
          {/* User Info */}
          <DropdownItem
            key="user"
            description="iboudjelthia@futuretail.ai"
            className="cursor-default"
          >
            Ilyes Boudjelthia
          </DropdownItem>

          {/* Menu Items */}
          <DropdownItem
            key="DarkMode"
            startContent={
              <img src="/assets/svgs/dark-mode.svg" alt="Dark Mode" />
            }
            className="border-t border-gray-200"
          >
            Dark Mode
          </DropdownItem>

          <DropdownItem
            key="Settings"
            startContent={
              <img src="/assets/svgs/settings.svg" alt="Settings" />
            }
          >
            Settings
          </DropdownItem>

          <DropdownItem
            key="UpgradePlan"
            startContent={
              <img src="/assets/svgs/upgrade-plan.svg" alt="Upgrade Plan" />
            }
          >
            Upgrade Plan
          </DropdownItem>

          <DropdownItem
            key="Help"
            startContent={<img src="/assets/svgs/help.svg" alt="Help" />}
          >
            Help
          </DropdownItem>

          {/* Log Out */}
          <DropdownItem
            key="LogOut"
            className="text-red-500"
            startContent={<img src="/assets/svgs/log-out.svg" alt="Log Out" />}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AvatarDropdown;
