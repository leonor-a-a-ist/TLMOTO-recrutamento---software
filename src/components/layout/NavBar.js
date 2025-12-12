import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4">
      <div>
      {router.pathname !== '/' && (
        <Link href="/">
          <img
            src="/images/home/home.png"
            alt="Home Logo"
            className="h-10 w-10 cursor-pointer"
          />
        </Link>
      )}
        </div>

        <div>
          <Link
            href="/about_us"
            className={router.pathname === '/about_us' ? 'font-bold underline' : ''}
          >
            ABOUT US
          </Link>
        </div>
    </nav>
  );
}
