import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant={"light"}
        onPress={() => setIsOpen(true)}
        className="block md:hidden"
      >
        <Menu />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                <NavMenu />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
