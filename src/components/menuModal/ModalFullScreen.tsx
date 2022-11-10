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

export function ModalFullScreen({ isOpen, onClose }: MenuModalProps) {
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
          <div className="w-10/12 flex h-full py-5 justify-between items-center">
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
        <ModalBody className="flex bg-gradient-to-b from-gray-100 to-gray-400">
          <MenuContent style="flex flex-col gap-16 text-5xl"/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
