import Navbar from './NavBar';
import Head from 'next/head';

export default function MyLayout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>TLMOTO</title>
        <meta name="description" content="Copied by me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}
