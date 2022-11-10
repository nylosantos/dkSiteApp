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
            <li className="hover:text-red-600 transition-all duration-300">Home</li>
          </Link>
          <Link to={"/about"} onClick={closeInstructionModal}>
            <li className="hover:text-red-600 transition-all duration-300">About</li>
          </Link>
          <Link to={"/team"} onClick={closeInstructionModal}>
            <li className="hover:text-red-600 transition-all duration-300">Our Teamys</li>
          </Link>
          <Link to={"/portfolio"} onClick={closeInstructionModal}>
            <li className="hover:text-red-600 transition-all duration-300">Portfolio</li>
          </Link>
          <li className="hover:text-red-600 transition-all duration-300 cursor-pointer" onClick={() => setIsOpen(true)}>
            Contact
          </li>
        </Fade>
      </ol>
    </div>
  );
}
