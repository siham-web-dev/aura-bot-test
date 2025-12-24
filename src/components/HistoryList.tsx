import { Accordion, AccordionItem } from "@heroui/accordion";
import { NavLink } from "react-router-dom";

export default function HistoryAccordion() {
  return (
    <Accordion variant="light" defaultExpandedKeys={["history"]}>
      <AccordionItem
        key="history"
        aria-label="History"
        startContent={
          <img
            src="/assets/svgs/history.svg"
            alt="history"
            className="h-5 w-5 "
          />
        }
        title="History"
        classNames={{
          title: "font-medium text-[#6A7282] text-[14px]",
          indicator: "data-[open=true]:rotate-180 transition-transform",
        }}
      >
        <div className="space-y-1 flex flex-col gap-[8px] ">
          <NavLink
            to={"/chat"}
            className={
              "flex items-center gap-3 bg-[#FAF5FF] p-[8px] rounded-[8px]"
            }
          >
            <img
              src="/assets/svgs/message.svg"
              alt="message icon"
              className="w-[16px] h-[16px]"
            />
            <div className="flex flex-col gap-[2px] text-[12px]">
              <p className="text-[#364153]">New chat</p>
              <small className="text-[#6A7282]">2 days ago</small>
            </div>
          </NavLink>
          <NavLink
            to={"/chat"}
            className={
              "flex items-center gap-3 hover:bg-[#FAF5FF] p-[8px] rounded-[8px]"
            }
          >
            <img
              src="/assets/svgs/message.svg"
              alt="message icon"
              className="w-[16px] h-[16px]"
            />
            <div className="flex flex-col gap-[2px] text-[12px]">
              <p className="text-[#364153]">New chat</p>
              <small className="text-[#6A7282]">2 days ago</small>
            </div>
          </NavLink>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
