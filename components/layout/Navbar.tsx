import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import navigationLinks from '../../navigationLinks';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const renderNavigationLinks = () => {
    return navigationLinks.map((link) => {
      return (
        <Link key={link.name} href={link.path}>
          <a className={`${router.asPath === link.path ? 'text-neutral-800' : 'text-neutral-500'}`}>
            {link.name}
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg p-4 px-8 h-32">
        <div className="flex items-center justify-between ">
          <Image className="z-20" src="/logo.svg" alt="logo" width={80} height={80} />
          <button className="z-20 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose size="2.5rem" /> : <AiOutlineMenu size="2.5rem" />}
          </button>

          <nav className="hidden lg:flex items-center space-x-8 text-lg">
            {renderNavigationLinks()}
          </nav>
        </div>
      </div>
      <nav className="lg:hidden">
        {isOpen && (
          <div className="absolute z-10 w-full h-screen left-0 top-0 bg-red-400">
            <nav className="absolute top-24  w-screen flex flex-col justify-center bg-red-200">
              {renderNavigationLinks()}
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
