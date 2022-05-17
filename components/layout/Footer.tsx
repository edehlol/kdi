import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import navigationLinks from '../../navigationLinks';

const iconSize = '1.5rem';

export default function Footer() {
  const renderNavigationLinks = () => {
    return navigationLinks.map((link) => {
      return (
        <Link key={link.name} href={link.path}>
          <a className="text-neutral-500 hover:text-neutral-900">{link.name}</a>
        </Link>
      );
    });
  };
  return (
    <div className="mt-20 flex items-center justify-center border-t py-12 ">
      <div className="flex max-w-screen-xl flex-col items-center justify-center space-y-6">
        <nav className="flex items-center space-x-8">{renderNavigationLinks()}</nav>
        <div className="flex items-center space-x-4">
          <AiOutlineInstagram fontSize={iconSize} />
          <AiOutlineFacebook fontSize={iconSize} />
        </div>
        <span className="text-sm">© {new Date().getFullYear()} KDI. All rights reserved.</span>
      </div>
    </div>
  );
}
