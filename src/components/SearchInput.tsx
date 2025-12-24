import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import AIModalsDropdown from "./AIModalsDropdown";
import { Button } from "@heroui/button";
import { MoveUp, SendHorizonal, SendHorizonalIcon } from "lucide-react";
import { Divider } from "@heroui/divider";

const SearchInput = () => {
  const [showTextArea, setShowTextArea] = useState<boolean>(true);

  return (
    <>
      {showTextArea ? (
        <Input
          className="mx-auto max-w-[720px]"
          classNames={{
            inputWrapper: [
              "bg-white",
              "border border-transparent",
              "shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]",
              "hover:bg-white hover:border-[#F7DCFF]",
              "data-[hover=true]:border-transparent",
              "data-[focus=true]:bg-white",
              "data-[focus=true]:border-[#F7DCFF]",
              "p-[17px]",
            ].join(" "),
            input: "px-4 py-4",
          }}
          placeholder="Ask AI a question or make a request..."
          startContent={
            <img
              alt="Search"
              className="h-5 w-5 opacity-60"
              src="/assets/svgs/star.svg"
            />
          }
          variant="bordered"
          onClick={() => setShowTextArea(false)}
        />
      ) : (
        <div className="relative w-full">
          <Textarea
            startContent={
              <img
                alt="Search"
                className="h-5 w-5 opacity-60"
                src="/assets/svgs/star.svg"
              />
            }
            minRows={3}
            className="w-full max-w-[720px]"
            classNames={{
              mainWrapper: ["hover:bg-white hover:border-[#F7DCFF]"],
              inputWrapper: [
                "bg-white",
                "border border-transparent",
                "shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]",
                "hover:bg-white hover:border-[#F7DCFF]",
                "data-[focus=true]:border-[#F7DCFF]",
                "pb-14", // ⬅️ space for dropdown
                "pt-4",
              ].join(" "),
              input: "px-4",
            }}
            placeholder="Ask AI a question or make a request..."
            variant="bordered"
          />

          {/* Dropdown inside textarea */}
          <div className="absolute bottom-3 left-3 w-full max-w-[96%] md:max-w-[320px] lg:max-w-[650px] flex flex-col gap-2">
            <Divider />
            <div className="flex justify-between items-center w-full">
              <AIModalsDropdown />
              <Button
                className="!rounded-full !p-[8px] !w-auto !h-auto min-w-[24px] bg-[#D4D4D8] "
                variant="light"
              >
                <MoveUp size={"12px"} color="#52525B" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchInput;
