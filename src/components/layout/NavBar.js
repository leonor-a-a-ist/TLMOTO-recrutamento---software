import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    const router = useRouter();
    const path = router.pathname;

    if (path === '/') return null;

    return (
        <nav className="bg-neutral-900">

            {/* Lado esquerdo */}
            <div>
                {path !== '/' && (
                    <Link href="/">
                        <HomeIcon color="primary" />
                    </Link>
                )}
            </div>

            {/* Lado direito */}
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
