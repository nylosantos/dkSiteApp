import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CardModalProps {
  isOpen: boolean;
  handleToggleCard: () => void;
  cardName: string;
}

export function CardModal({
  isOpen,
  handleToggleCard,
  cardName,
}: CardModalProps) {
  function handleCardImage() {
    if (cardName === "Hologram - 3D - WebMobile") {
      return (
        <img
          className="w-3/4 h-3/4"
          src="./assets/cards/hologram.png"
          alt={cardName}
        />
      );
    }
    if (
      cardName ===
      "Ways to communicate - Media Storytelling - Work with Social Media"
    ) {
      return (
        <img
          className="w-3/4 h-3/4"
          src="./assets/cards/storytelling.png"
          alt={cardName}
        />
      );
    }
    if (cardName === "Social Media Filters - High Definition 3D") {
      return (
        <img
          className="w-3/4 h-3/4"
          src="./assets/cards/socialMediaFilters.png"
          alt={cardName}
        />
      );
    }
    if (
      cardName === "Mobile Games - Virtual Design - Augmented Reality Elements"
    ) {
      return (
        <img
          className="w-3/4 h-3/4"
          src="./assets/cards/mobileGames.png"
          alt={cardName}
        />
      );
    }
    if (cardName === "Metaverse - Virtual Reality Design - Augmented Reality") {
      return (
        <img
          className="w-3/4 h-3/4"
          src="./assets/cards/metaverse.png"
          alt={cardName}
        />
      );
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleToggleCard}
      size="6xl"
      isCentered={false}
      motionPreset="none"
      blockScrollOnMount={false}
      scrollBehavior={"outside"}
    >
      <ModalOverlay />
      <ModalContent className="py-10">
        <ModalCloseButton className="text-red-500 outline-none" />
        <ModalBody className="flex flex-col items-center gap-10">
          {handleCardImage()}
          <div className="w-screen flex justify-center">
            <Link to={"/contact"}>
              <IconButton
                aria-label="Contact Us"
                className="w-[600px] items-center shadow-md hover:shadow-lg border hover:border-white hover:border-opacity-30"
                colorScheme="red"
              >
                <p className="text-center text-2xl text-white">
                  START YOUR DREAM PROJECT WITH US
                </p>
              </IconButton>
            </Link>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
