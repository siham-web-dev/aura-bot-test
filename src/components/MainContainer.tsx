import { Divider } from "@heroui/divider";

import ExamplesGrid from "./ExamplesGrid";
import SearchInput from "./SearchInput";
import ShareBtn from "./ShareBtn";
import WelcomeSection from "./WelcomeSection";

const MainContainer = () => {
  return (
    <div className="flex-1 w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-[32px] ">
        <div className="flex flex-col gap-[24px] mt-[24px]">
          <ShareBtn />
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
