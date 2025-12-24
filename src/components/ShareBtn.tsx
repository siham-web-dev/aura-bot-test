import { Button } from "@heroui/button";

const ShareBtn = () => {
  return (
    <Button
      className={
        "text-[14px] text-share-btn flex items-center gap-[8px] ml-auto mr-1.5  text-[#4a5565]"
      }
      variant={"light"}
    >
      <img alt={"share icon"} src={"/assets/svgs/share.svg"} />
      <span>Share</span>
    </Button>
  );
};

export default ShareBtn;
