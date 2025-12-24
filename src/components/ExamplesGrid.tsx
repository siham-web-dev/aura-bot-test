import { Card, CardBody } from "@heroui/card";
const ExamplesGrid = () => {
  const EXAMPLES = [
    {
      img: "/assets/svgs/compare.svg",
      text: "Compare Decathlon running shoes vs Nike & Adidas",
    },
    {
      img: "/assets/svgs/analytics-down.svg",
      text: "Compare Decathlon running shoes vs Nike & Adidas",
    },
    {
      img: "/assets/svgs/charts.svg",
      text: "Compare Decathlon running shoes vs Nike & Adidas",
    },
    {
      img: "/assets/svgs/notification.svg",
      text: "Compare Decathlon running shoes vs Nike & Adidas",
    },
  ];

  return (
    <div className="flex flex-col gap-[16px] justify-center items-center">
      <h6 className="text-[#6A7282] text-[12px] uppercase">
        GET STARTED WITH AN EXAMPLE BELOW
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] mx-auto max-w-[720px] ">
        {EXAMPLES.map((example, index) => (
          <Card
            key={index}
            className="shadow-none bg-transparent border border-[#E5E7EB] rounded-[14px] p-[16px] w-auto"
          >
            <CardBody className="flex flex-col gap-[16px]">
              <p className="text-[#364153] text-[12px] ">{example.text}</p>
              <div className=" border border-[#E5E7EB] p-[8px] w-fit rounded-[12px]">
                <img
                  alt="icon"
                  className="w-[16px] h-[16px]"
                  src={example.img}
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      ;
    </div>
  );
};

export default ExamplesGrid;
