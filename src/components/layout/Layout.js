import MyNavbar from './NavBar';
import Head from 'next/head';

export default function MyLayout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>OUR WEBSITE</title>
      </Head>
      <MyNavbar />
      <div className="content">{children}</div>
    </div>
  );
}