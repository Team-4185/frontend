import { Box, Typography, Badge } from '@mui/material';
import Logo from '/icons/Logo.png';
import LogoText from '/icons/LogoText.svg';
import type React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import CartIcon from '/icons/cart.svg';
import SearchIcon from '/icons/search.svg';
import UserIcon from '/icons/user.svg';
import LikedIcon from '/icons/liked.svg';

type NavigationProps = {
  page?: 'Home' | 'Catalog' | 'About us' | 'Login' | 'Register' | 'Cart' | 'Delivery' | 'Payment';
  orderLength?: number;
  handleLogin?: () => void;
};

export const PageName = {
  Home: 'Home',
  Catalog: 'Catalog',
  AboutUs: 'About us',
  Cart: 'Cart',
  Delivery: 'Delivery',
  Payment: 'Payment',
  Login: 'Login',
  Register: 'Register',
} as const;

export const Navigation: React.FC<NavigationProps> = ({ page, orderLength, handleLogin }) => {
  const location = useLocation();

  const icons = [
    { id: 0, src: SearchIcon, href: '#' },
    { id: 1, src: UserIcon, href: '/auth' },
    { id: 2, src: LikedIcon, href: '#' },
    { id: 3, src: CartIcon, href: '/cart' },
  ];

  const pages = [
    { id: 0, name: PageName.Home, href: '/' },
    { id: 1, name: PageName.Catalog, href: '/catalog' },
    { id: 2, name: PageName.AboutUs, href: '/about' },
  ];

  const authPage = page === 'Login' || page === 'Register';

  const authButtons = [
    { id: 0, name: PageName.Login, href: '/auth' },
    { id: 1, name: PageName.Register, href: '/auth' },
  ];

  return (
    <Box component="nav" className="navigation">
      <Box className="navigation-left">
        <NavLink key={0} to={'/'} className="navigation-logo">
          <img src={Logo} alt="Logo" />
          <img src={LogoText} alt="GadgetRoom" />
        </NavLink>
        {!authPage && (
          <Box className="navigation-pages">
            {pages.map((p) => (
              <NavLink
                key={p.href}
                to={p.href}
                className={({ isActive }) => `navigation-page ${isActive ? 'active' : ''}`}
              >
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    fontSize: '18px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {p.name}
                </Typography>
              </NavLink>
            ))}
          </Box>
        )}
      </Box>

      {!authPage ? (
        <Box className="navigation-icons">
          {icons.map((icon) => (
            <NavLink
              key={icon.id}
              to={icon.href}
              className={({ isActive }) => `navigation-icon ${isActive ? 'active' : ''}`}
            >
              {icon.src === CartIcon ? (
                <Badge
                  badgeContent={orderLength && orderLength > 0 ? orderLength : 0}
                  color="primary"
                >
                  <img src={icon.src} alt="icon" />
                </Badge>
              ) : (
                <img src={icon.src} alt="icon" />
              )}
            </NavLink>
          ))}
        </Box>
      ) : (
        <Box className="navigation-auth">
          {authButtons.map((authButton) => {
            // fallback to 'login' if location.state?.mode is undefined
            const currentMode = location.state?.mode || 'login';
            const isActive = location.pathname === '/auth' && currentMode === authButton.name.toLowerCase();

            return (
              <NavLink
                key={authButton.id}
                to="/auth"
                state={{ mode: authButton.name.toLowerCase() }}
                className={`${isActive ? 'clicked' : ''}`}
                onClick={() => handleLogin && handleLogin()}
              >
                {authButton.name}
              </NavLink>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
