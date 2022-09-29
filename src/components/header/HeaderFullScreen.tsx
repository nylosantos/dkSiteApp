import React, { useState } from "react";
import { MenuModal } from "../menuModal/MenuModal";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export function HeaderFullScreen() {
  function handleToggleModal() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeInstructionModal = () => setIsOpen(false);
  return (
    <div className="flex fixed top-0 left-0 w-screen justify-center items-center z-20">
      <MenuModal isOpen={isOpen} onClose={closeInstructionModal} />
      <div className="w-10/12 h-full py-5 flex justify-between items-center">
        <img src="./src/assets/logo.png" alt="DK Logo" className="w-1/12" />
        <Button
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          size="md"
          colorScheme="whiteAlpha"
          onClick={handleToggleModal}
        />
      </div>
    </div>
  );
}
