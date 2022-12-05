import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ContactForm } from "../contactForm";
import { FaPaperPlane } from "react-icons/fa";
import { ScreenSizeRouterProps } from "../../Router";

interface ContactModalProps extends ScreenSizeRouterProps {
  openContactModal: boolean;
  onClose: () => void;
  menuIsOpen?: boolean;
  handleToggleMenu?: () => void;
}

export function ContactModal({
  openContactModal,
  onClose,
  menuIsOpen,
  handleToggleMenu,
  windowSize,
  tabletBreakpoint,
  desktopBreakpoint,
}: ContactModalProps) {
  // CLOSE CONTACT MODAL AND IF MENU IS OPEN CLOSE MENU TOO
  function handleCloseAllModals() {
    if (menuIsOpen && handleToggleMenu) {
      handleToggleMenu();
      onClose();
    } else {
      onClose();
    }
  }

  return (
    <Modal
      isOpen={openContactModal}
      onClose={handleCloseAllModals}
      size="full"
      isCentered={false}
      motionPreset="none"
      blockScrollOnMount={false}
      scrollBehavior={"outside"}
    >
      <ModalOverlay />
      <ModalContent className="pt-8 px-2 desktop:py-10 desktop:px-32">
        <ModalCloseButton className="text-red-600 outline-none" />
        <ModalBody className="flex flex-col m-auto gap-4">
          <h1 className="flex text-2xl desktop:text-4xl font-bold font-poppins items-center gap-3">
            <FaPaperPlane className="text-red-600" />
            Contact Us
          </h1>
          <p className="text-sm desktop:text-base">
            Fill Out Our Form & We'll be in Touch Shortly
          </p>
          <p className="w-full mb-4 text-gray-500 text-xs desktop:text-sm text-left">
            "*" indicates required fields
          </p>
          <ContactForm
            onClose={onClose}
            gaEventTrackerCategory={
              windowSize.innerWidth < tabletBreakpoint
                ? "Website's contact by Cellphone" // NAME TO CELLPHONE
                : windowSize.innerWidth < desktopBreakpoint
                ? "Website's contact by Tablet" // NAME TO TABLET
                : "Website's contact by Cellphone" // NAME TO DESKTOP
            }
            gaEventTrackerAction="Contact Submit"
            gaEventTrackerLabel={
              windowSize.innerWidth < tabletBreakpoint
                ? "Contact submitted by Cellphone" // NAME TO CELLPHONE
                : windowSize.innerWidth < desktopBreakpoint
                ? "Contact submitted by Tablet" // NAME TO TABLET
                : "Contact submitted by Cellphone" // NAME TO DESKTOP
            }
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
