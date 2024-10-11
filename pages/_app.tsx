import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Jika kamu punya file global styles lain

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;