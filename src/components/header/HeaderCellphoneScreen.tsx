import React, { useState } from "react";
import { MenuModal } from "../menuModal/MenuModal";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {
  headerStyle: string;
  colorScheme: 'pink' | 'yellow' | 'whiteAlpha' | 'blackAlpha';
};

export function HeaderCellphoneScreen({ headerStyle, colorScheme }: Props) {
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
      <div className="w-10/12 h-full py-4 flex justify-between items-center">
        <Link to={"/"} className='outline-hidden'>
          <img src="./assets/logoBlack.png" alt="DK Logo" className="w-2/12" />
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
