import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  List,
  ListItem,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react';
import { BurgerIcon, CartIcon } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Products',
    route: '/products'
  },
  {
    label: 'About Us',
    route: '/about-us'
  }
];
function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [headerShrink, setHeaderShrink] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let isMounted = true;

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (isMounted) {
          // setHeaderSticky(window.pageYOffset > 0);
          // setHeaderShrink(window.pageYOffset > 400);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header className={`header header--sticky ${headerShrink ? 'header--shrink' : ''}`}>
      <div className="header--innner konsept-container flex justify-between items-center">
        <div className="mr-4 lg:mr-16 h-10 md:h-14 relative w-[115px] sm:w-[160px]">
          <Link href="/">
            <Image
              className="h-full w-full"
              src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
              alt="logo"
              srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
              sizes="(max-width: 330px) 100vw, 330px"
              fill
            />
          </Link>
        </div>

        <nav className="header__nav mr-auto hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.route}
                  className="konsept-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__widgets-holder ml-3">
          {/* <div
            className="header__widget h-full"
            onClick={() => {
              if (!currentUser) {
                history.push(path.login);
              } else {
                history.push(path.user);
              }
            }}
          >
            <p className="cursor-pointer mr-1 hidden md:block">
              {currentUser ? currentUser.username : ''}
            </p>
            <div className="header__widget-content">
              <Tooltip title="User">
                <IconButton aria-label="user">
                  <IconUser />
                  <span className="ml-1 hidden">Login/Register</span>
                </IconButton>
              </Tooltip>
            </div>
          </div> */}
          <Link
            className="header__widget h-full mr-2"
            href="/cart"
          >
            <div className="header__widget-content">
              <Tooltip label="Cart">
                <IconButton icon={<CartIcon />} />
              </Tooltip>
            </div>
          </Link>

          <div
            className="header__widget h-full block lg:hidden"
            onClick={onOpen}
          >
            <div className="header__widget-content">
              <span className="header__burger block lg:hidden">
                <BurgerIcon />
              </span>
              <span className="ml-1 hidden"></span>
            </div>
          </div>
        </div>

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Box pt={10}>
                <List>{getDrawerChoices()}</List>
              </Box>
            </DrawerBody>
            <DrawerFooter>{/* TODO: social links */}</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}

const getDrawerChoices = () => {
  return navItems.map(({ label, route }) => {
    return (
      <ListItem
        key={label}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Link
          className="konsept-link"
          href={route}
          color="inherit"
          style={{ textDecoration: 'none' }}
        >
          {label}
        </Link>
      </ListItem>
    );
  });
};

export default Header;
