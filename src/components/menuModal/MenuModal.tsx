import { Header } from "../header/Header";
import { ScreenSizeRouterProps } from "../../Router";
import { MenuContent } from "./MenuContent";

import { Modal, ModalBody, ModalContent } from "@chakra-ui/react";

interface MenuModalProps extends ScreenSizeRouterProps {
  openMenu: boolean;
  handleToggleMenu: () => void;
}

export function MenuModal({
  openMenu,
  handleToggleMenu,
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: MenuModalProps) {
  return (
    <Modal
      isOpen={openMenu}
      onClose={handleToggleMenu}
      size="full"
      isCentered
      motionPreset="none"
    >
      <ModalContent>
        <Header
          colorScheme="whiteAlpha"
          variant="solid"
          openMenu={openMenu}
          handleToggleMenu={handleToggleMenu}
        />
        <ModalBody className="flex bg-white">
          <MenuContent
            divider={windowSize.innerWidth < tabletBreakpoint ? true : false}
            handleToggleMenu={handleToggleMenu}
            openMenu={openMenu}
            windowSize={windowSize}
            tabletBreakpoint={tabletBreakpoint}
            desktopBreakpoint={desktopBreakpoint}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
