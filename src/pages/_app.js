import { useEffect } from 'react';
import '@/styles/globals.scss';
import MyLayout from '@/components/layout/Layout';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Guardar o título original
        const originalTitle = document.title;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Quando o utilizador sai do tab
                document.title = "🏍️ I am lonely tab :(";
            } else {
                // Quando o utilizador volta ao tab
                document.title = originalTitle;
            }
        };

        // Adicionar o event listener
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup: remover o listener quando o componente for desmontado
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <MyLayout>
            <Component {...pageProps} />
        </MyLayout>
    );
}