import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navigationLinks from '../../navigationLinks';

export default function Navbar() {
  const router = useRouter();

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
    <div className="mx-auto max-w-screen-lg p-8">
      <div className="flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
        <nav className="hidden lg:flex items-center space-x-8 text-lg">
          {renderNavigationLinks()}
        </nav>
      </div>
    </div>
  );
}
