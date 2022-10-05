import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContent } from "./MenuContent";
import { Link } from "react-router-dom";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalMidScreen({ isOpen, onClose }: MenuModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      isCentered
      motionPreset="none"
    >
      <ModalContent>
        <div className="flex absolute top-0 left-0 w-screen h-16 justify-center items-center">
          <div className={`w-10/12 flex justify-between items-center`}>
            <Link to={"/"} onClick={onClose} className='outline-hidden'>
              <img
                src="./assets/logoBlack.png"
                alt="DK Logo"
                className="w-1/12"
              />
            </Link>
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
          <MenuContent style="flex flex-col gap-4 text-xl" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
