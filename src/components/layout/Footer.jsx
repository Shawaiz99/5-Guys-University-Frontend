import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-center p-4 bg-dark text-light text-secondary">
      <FaRegCopyright /> {new Date().getFullYear()} Five Guys University
    </div>
  );
}

export default Footer;
