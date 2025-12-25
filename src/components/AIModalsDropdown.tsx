import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@heroui/dropdown";
import { useMemo, useState } from "react";
import { ChevronDown, Plus, Info, Settings } from "lucide-react";

export default function AIModelsDropdown() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["analytics_pro"]));

  const assistants = [
    { key: "analytics_pro", name: "Analytics Pro", model: "GPT-4 Turbo" },
    { key: "price_monitor", name: "Price Monitor", model: "Claude 3.5" },
    { key: "market_insight", name: "Market Insight", model: "GPT-4" },
    { key: "competitor_track", name: "Competitor Track", model: "Gemini Pro" },
  ];

  /*   const selectedValue = useMemo(() => {
    const key = Array.from(selectedKeys)[0];
    const assistant = assistants.find((a) => a.key === key);
    return assistant ? assistant.name : "Select Assistant";
  }, [selectedKeys]);
 */
  const selectedModel = useMemo(() => {
    const key = Array.from(selectedKeys)[0];
    const assistant = assistants.find((a) => a.key === key);

    return assistant ? assistant.model : "";
  }, [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="bg-white shadow-0 transition-shadow h-auto py-3 px-4 rounded-xl !p-2 border-1 border-[#E5B0FF]"
          endContent={<ChevronDown className="w-4 h-4 text-gray-400" />}
          startContent={<img alt="bot icon" src="/assets/svgs/bot.svg" />}
          variant="bordered"
        >
          {selectedModel}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="AI Assistant selection"
        className="w-[320px]"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) => {
          // Normalize SharedSelection to Set<string> and update state
          if (keys === "all") {
            setSelectedKeys(new Set());

            return;
          }
          if (typeof keys === "string") {
            setSelectedKeys(new Set([keys]));

            return;
          }
          // keys may already be a Set<string>
          setSelectedKeys(keys as Set<string>);
        }}
      >
        <DropdownSection showDivider>
          {assistants.map((assistant) => (
            <DropdownItem
              key={assistant.key}
              className="py-3"
              description={assistant.model}
              endContent={
                <button
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Info clicked for ${assistant.name}`);
                  }}
                >
                  <Info className="w-4 h-4 text-gray-400" />
                </button>
              }
              startContent={<img alt="bot icon" src="/assets/svgs/bot.svg" />}
            >
              {assistant.name}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="create_new"
            className="text-purple-600 font-medium py-3"
            startContent={<Plus className="w-5 h-5 text-purple-600" />}
            onPress={() => console.log("Create new assistant")}
          >
            Create New Assistant
          </DropdownItem>
          <DropdownItem
            key="settings"
            className="font-medium py-3"
            startContent={<Settings className="w-5 h-5" />}
            onPress={() => console.log("Create new assistant")}
          >
            Manage assistants
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
