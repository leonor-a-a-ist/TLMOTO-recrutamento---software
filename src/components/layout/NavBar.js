import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <div className="font-bold text-xl">TLMOTO</div>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about-us" className="hover:underline">
          About Us
        </Link>
      </div>
    </nav>
  );
}
