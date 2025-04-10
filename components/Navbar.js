import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons
const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/Auctions';
      case 2:
        return '/About';
      case 3:
        return '/Profile';
      case 4: 
        return '/Contact'
      default:
        return '/Admin';
    }
  };

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Home', 'Auctions', 'About Us','Company Profile', 'Contact Us', 'Admin' ].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);

            if (isMobile) setIsOpen(false);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
          ${active === item
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'} 
          ${isMobile && 'my-5 text-xl'}`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;

  return hasConnected ? (
    <div className="flexCenter">
     
    </div>
  ) : (
    <Button
      btnName="Connect"
      btnType="outline"
      classStyles="mx-2 rounded-lg"
      handleClick={() => {}}
    />
  );
};
const checkActive = (active, setActive, router) => {
  switch (router.pathname) {
    case '/':
      if (active !== 'Top Models') setActive('Top Models');
      break;
    case '/profile':
      if (active !== 'Listed NFTs') setActive('Listed NFTs');
      break;
    case '/my-nfts':
      if (active !== 'My NFTs') setActive('My NFTs');
      break;
    case '/create-nft':
      if (active !== '') setActive('');
      break;
    default:
      setActive('');
  }
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Top Models');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTheme('light');
  }, []);

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

  useEffect(() => {
    // disable body scroll when navbar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => setActive('Explore NFTs')}>
            <Image src={images.logo} objectFit="contain" width={32} height={32} alt="logo" />
            <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">Murphy Auctioneers</p>
          </div>
        </Link>
        <Link href="/">
          <div
            className="hidden md:flex"
            onClick={() => {
              setActive('Explore NFTs');
              setIsOpen(false);
            }}
          > 
            <Image src={images.logo} objectFit="contain" width={32} height={32} alt="logo" />
            <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">Murphy Auctioneers</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-initial flex-row justify-end">
        {/* <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div> */}

        <div className="md:hidden flex">
          <ul className="list-none flexCenter flex-row">
            <MenuItems active={active} setActive={setActive} />
          </ul>
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
      {!isOpen
          ? (
            <FaBars
              size={25}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          )
          : (
            <FaTimes
              size={20}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            />
          )}
        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
