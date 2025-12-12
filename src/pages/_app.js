import '@/styles/globals.scss';
import MyLayout from '@/components/layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}
