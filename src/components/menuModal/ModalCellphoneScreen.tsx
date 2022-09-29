import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContent } from "./MenuContent";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCellphoneScreen({ isOpen, onClose }: MenuModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      isCentered
      motionPreset="none"
    >
      <ModalContent>
        <div className="flex absolute top-0 left-0 w-screen justify-center items-center">
          <div className="w-10/12 h-full py-4 flex justify-between items-center">
            <img
              src="./src/assets/logoBlack.png"
              alt="DK Logo"
              className="w-2/12"
            />
            <Button
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineClose />}
              colorScheme="blackAlpha"
              size="md"
              onClick={onClose}
            />
          </div>
        </div>
        <ModalBody className="flex">
          <MenuContent />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
