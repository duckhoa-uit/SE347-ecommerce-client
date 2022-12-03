import { Box, Drawer, IconButton, List, ListItem, MenuItem, Tooltip } from '@chakra-ui/react';
import { BurgerIcon, CartIcon } from '@icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (isMounted) {
          setHeaderSticky(window.pageYOffset > 0);
          setHeaderShrink(window.pageYOffset > 400);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header
      className={`header ${headerSticky ? 'header--sticky' : ''} ${
        headerShrink ? 'header--shrink' : ''
      }`}
    >
      <div className="header--innner konsept-container flex justify-between items-center">
        <div className="mr-4 lg:mr-16 h-10 md:h-14">
          <Link href="/">
            <img
              className="h-full"
              src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
              alt="logo"
              srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
              sizes="(max-width: 330px) 100vw, 330px"
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
              <Tooltip title="Cart">
                <IconButton icon={<CartIcon />} />
              </Tooltip>
            </div>
          </Link>

          <div
            className="header__widget h-full block lg:hidden"
            onClick={() => setDrawerOpen(true)}
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
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: () => setDrawerOpen(false)
          }}
        >
          <Box
            sx={{
              width: 200,
              pt: 10
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {getDrawerChoices()}
            </List>
          </Box>
        </Drawer>
      </div>
    </header>
  );
}

const getDrawerChoices = () => {
  return navItems.map(({ label, route }) => {
    return (
      <ListItem
        button
        key={label}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Link
          className="konsept-link"
          href={route}
          color="inherit"
          style={{ textDecoration: 'none' }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      </ListItem>
    );
  });
};

export default Header;
