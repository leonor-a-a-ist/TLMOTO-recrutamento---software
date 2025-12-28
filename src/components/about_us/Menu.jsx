import { useRouter } from 'next/router';
import styles from "@/styles/menu.module.scss"

const Menu = () => {
    const router = useRouter();
    return (
        <nav className={styles.menu}>
            <a href="/maria" className={router.pathname === '/maria' ? 'active' : ''}>Maria Cordeiro</a>
            <a href="/leonor" className={router.pathname === '/leonor' ? 'active' : ''}>Leonor Azevedo</a>
            <span> </span>
        </nav>
    );
};

export default Menu;