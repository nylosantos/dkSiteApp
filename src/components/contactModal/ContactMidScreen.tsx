import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactMidScreen({ isOpen, onClose }: MenuModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
      motionPreset="none"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody className="flex">

        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
