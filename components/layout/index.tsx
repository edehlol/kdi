import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-800">
      <Navbar />
      <div className="mx-auto max-w-screen-lg px-8">{children}</div>
      <Footer />
    </div>
  );
}
