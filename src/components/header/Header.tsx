import React, { useState } from "react";
import { MenuModal } from "../menuModal/MenuModal";
import { Button, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

interface HeaderProps {
  colorScheme: "pink" | "yellow" | "whiteAlpha" | "blackAlpha";
  variant: "solid" | "ghost" | "outline" | "link";
  openMenu: boolean;
  handleToggleMenu: () => void;
}

export function Header({
  colorScheme,
  variant,
  openMenu,
  handleToggleMenu,
}: HeaderProps) {
  return (
    <div className="flex fixed top-0 left-0 w-screen justify-center items-center z-50">
      <div className="flex w-10/12 py-5 justify-between items-center">
        <Link to={"/"} className="outline-hidden">
          <img
            src="./assets/logoBlack.png"
            alt="DK Logo"
            className="w-16 desktop:w-32"
            onClick={handleToggleMenu}
          />
        </Link>

        <Button
          as={IconButton}
          aria-label="Options"
          icon={
            openMenu ? (
              <AiOutlineClose
                className="w-4 h-4 desktop:w-6 desktop:h-6"
                style={{ color: "#000000" }}
              />
            ) : (
              <GiHamburgerMenu
                className="w-4 h-4 desktop:w-6 desktop:h-6"
                style={{ color: "#000000" }}
              />
            )
          }
          colorScheme={colorScheme}
          size="md"
          variant={variant}
          onClick={handleToggleMenu}
        />
      </div>
    </div>
  );
}
