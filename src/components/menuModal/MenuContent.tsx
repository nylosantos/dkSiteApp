import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { ContactModal } from "../contactModal/ContactModal";

type Props = {
  style: string;
};

export function MenuContent({ style }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeInstructionModal = () => setIsOpen(false);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ContactModal isOpen={isOpen} onClose={closeInstructionModal} />
      <ol className={style}>
        <Fade cascade={true}>
          <Link to={"/"} onClick={closeInstructionModal}>
            <li>Home</li>
          </Link>
          <Link to={"/About"} onClick={closeInstructionModal}>
            <li>About</li>
          </Link>
          <Link to={"/Team"} onClick={closeInstructionModal}>
            <li>Our Teamys</li>
          </Link>
          <Link to={"/Portfolio"} onClick={closeInstructionModal}>
            <li>Portfolio</li>
          </Link>
          <li className="cursor-pointer" onClick={() => setIsOpen(true)}>
            Contact
          </li>
        </Fade>
      </ol>
    </div>
  );
}
