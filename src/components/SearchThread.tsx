import { Input } from "@heroui/input";

const SearchThread = () => {
  return (
    <Input
      classNames={{
        inputWrapper: [
          "bg-white",
          "border border-transparent",
          "hover:bg-white hover:border-[#F7DCFF]",
          "hover:border-transparent",
          "data-[hover=true]:border-transparent",
          "data-[focus=true]:bg-white",
          "data-[focus=true]:border-[#F7DCFF]",
        ].join(" "),
      }}
      placeholder="Search Threads"
      startContent={
        <img
          alt="Search"
          className="h-5 w-5 opacity-60"
          src="/assets/svgs/search.svg"
        />
      }
      variant="bordered"
    />
  );
};

export default SearchThread;
