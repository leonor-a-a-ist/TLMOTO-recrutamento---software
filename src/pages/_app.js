import '@/styles/globals.css';
import MyLayout from '@/components/layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}
