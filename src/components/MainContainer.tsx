import { Divider } from "@heroui/divider";

import ExamplesGrid from "./ExamplesGrid";
import SearchInput from "./SearchInput";
import ShareBtn from "./ShareBtn";
import WelcomeSection from "./WelcomeSection";
import MobileSidebar from "./MobileSidebar";

const MainContainer = () => {
  return (
    <div className="flex-1 w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-[32px] ">
        <div className="flex flex-col gap-[24px] mt-[24px]">
          <div className="flex justify-between items-center">
            <MobileSidebar />
            <ShareBtn />
          </div>
          <Divider />
        </div>
        <div className="flex flex-col justify-center items-center gap-[24px] w-full px-5 sm:mx-auto sm:max-w-[400px] lg:max-w-[720px] h-full">
          <WelcomeSection />
          <SearchInput />
          <ExamplesGrid />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
