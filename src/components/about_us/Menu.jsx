import { useRouter } from 'next/router';

const Menu = () => {
    const router = useRouter();
    return (
        <nav className="menu">
            <a href="/maria" className={router.pathname === '/maria' ? 'active' : ''}>Maria Cordeiro</a>
            <a href="/leonor" className={router.pathname === '/leonor' ? 'active' : ''}>Leonor Azevedo</a>
            <span> </span>
        </nav>
    );
};

export default Menu;