import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Img from './img';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between w-full px-4">
      <Link href="/">
        <a className="flex items-center hover:cursor-pointer">
          <Img src="/images/logo.png" size="w-12 h-12" corners="rounded-md" />
          <h4 className="ml-4">Astral Codex Ten</h4>
        </a>
      </Link>

      <div className="flex items-center">
        <button className="px-3 py-3 bg-blue-400 text-white text-sm rounded-md mr-4">
          Subscribe
        </button>
        <div className="text-gray-400" onClick={toggleMenu}>
          {open ? <AiOutlineUp size="1.5rem" /> : <AiOutlineDown size="1.5rem" />}
        </div>
      </div>
    </div>

    // <div
    //   className={`flex items-center justify-between ${
    //     open ? 'fixed top-0 w-full z-50 bg-white' : ''
    //   }`}
    // >
    //   <div className="flex items-center justify-between  mb-0 sticky top-0">
    //     <Link href="/" passHref>
    //       <div className="flex items-center cursor-pointer">
    //         <div className="h-12 w-12 relative mr-4">
    //           <Image
    //             className="rounded-md"
    //             src="/images/logo.png"
    //             layout="fill"
    //             alt="author logo"
    //           />
    //         </div>
    //         <h2>Astral Codex Ten</h2>
    //       </div>
    //     </Link>

    //     <div className="flex items-center">
    //       <button className="px-3 py-3 bg-blue-400 text-white text-sm rounded-md mr-4">
    //         Subscribe
    //       </button>
    //       <div className="text-gray-400" onClick={toggleMenu}>
    //         {open ? <AiOutlineUp size="1.5rem" /> : <AiOutlineDown size="1.5rem" />}
    //       </div>
    //     </div>
    //   </div>
    //   {open && (
    //     <nav className={`border-b container pb-4 fixed bg-white pt-8 top-24 w-full `}>
    //       <ul className="flex flex-col items-end text-lg">
    //         <li className="mb-4">
    //           <Link href="/about">About</Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/archive">Archive</Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/mistakes">Mistakes</Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/help">Help</Link>
    //         </li>
    //         <li className="mb-4">
    //           <Link href="/login">Log in</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   )}
    // </div>
  );
};

export default Navbar;
