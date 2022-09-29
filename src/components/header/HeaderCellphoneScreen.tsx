import React, { useState } from "react";
import { MenuModal } from "../menuModal/MenuModal";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  headerStyle: string;
};

export function HeaderCellphoneScreen({ headerStyle }: Props) {
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
    <div className={headerStyle}>
      <MenuModal isOpen={isOpen} onClose={closeInstructionModal} />
      <div className="w-10/12 h-8 flex justify-between items-center">
        <p>MENU CELLPHONE</p>
        <Button
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          size="xs"
          colorScheme="whiteAlpha"
          onClick={handleToggleModal}
        />
      </div>
    </div>
  );
}
