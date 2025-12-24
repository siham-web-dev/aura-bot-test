import { Button } from "@heroui/button";

const NewThread = () => {
  return (
    <Button
      color="primary"
      className="flex items-center justify-start gap-[12px] text-white !bg-[#9810fa] mt-[24px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33203 10H14.6654"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 5.33334V14.6667"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>New Thread</p>
    </Button>
  );
};

export default NewThread;
