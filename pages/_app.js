import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (

  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
    <Toaster />
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
  </ThemeProvider>

);

export default MyApp;
