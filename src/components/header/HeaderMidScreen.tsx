import React, { useState } from "react";
import { MenuModal } from "../menuModal/MenuModal";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {
  colorScheme: "pink" | "yellow" | "whiteAlpha" | "blackAlpha";
};

export function HeaderMidScreen({ colorScheme }: Props) {
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
      <div className="w-10/12 h-16 py-5 flex justify-between items-center">
        <Link to={"/"} className="outline-hidden">
          <img src="./assets/logoBlack.png" alt="DK Logo" className="w-1/12" />
        </Link>
        <Button
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          size="md"
          colorScheme={colorScheme}
          onClick={handleToggleModal}
        />
      </div>
    </div>
  );
}
