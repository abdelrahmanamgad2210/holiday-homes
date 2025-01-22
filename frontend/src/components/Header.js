import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/"><span className="text-yellow-500">KEY</span> ONE</Link>
        </div>
        <nav className="space-x-4">
          <Link href="#home" className="hover:text-blue-500">Home</Link>
          <Link href="#services" className="hover:text-blue-500">Services</Link>
          <Link href="#About" className="hover:text-blue-500">About Us</Link>
          <Link href="#partners" className="hover:text-blue-500">Partners</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
