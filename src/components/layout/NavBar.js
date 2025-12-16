import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    const router = useRouter();
    const path = router.pathname;

    return (
        <nav className="bg-black text-white flex items-center justify-between px-12 py-12">

            <div>
                {path !== '/' && (
                    <Link href="/">
                        <HomeIcon color="primary" />
                    </Link>
                )}
            </div>

            <div>
                {path !== '/' && (
                <Link
                    href="/about_us"
                    className={path === '/about_us' ? 'font-bold underline' : ''}
                >
                    ABOUT US
                </Link>
                )}
            </div>

        </nav>
    );
}
