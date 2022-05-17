import Link from 'next/link';

export default function Button({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <button className="rounded bg-yellow-500 px-5 py-2 text-lg text-white hover:bg-yellow-600 active:bg-yellow-700">
      {href ? <Link href={href}>{children}</Link> : children}
    </button>
  );
}
