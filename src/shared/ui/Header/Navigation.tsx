import { Box, Typography, Badge } from '@mui/material';
import Search from '/icons/search.svg';
import User from '/icons/user.svg';
import Liked from '/icons/liked.svg';
import Cart from '/icons/cart.svg';
import Logo from '/icons/Logo.png';
import LogoText from '/icons/LogoText.svg';
import type React from 'react';
import './Header.css';

type NavigationProps = {
  page?:
    | 'Home'
    | 'Catalog'
    | 'About us'
    | 'Login'
    | 'Register'
    | 'Cart'
    | 'Shipping details'
    | 'Payment';
  orderLength?: number;
};

export const Navigation: React.FC<NavigationProps> = ({ page, orderLength }) => {
  const icons = [Search, User, Liked, Cart];
  const pages = ['HOME', 'CATALOG', 'ABOUT US'];
  const authPage = page === 'Login' || page === 'Register';
  const authButtons = ['Login', 'Register'];

  return (
    <Box component="nav" className="navigation">
      <Box className="navigation-left">
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="GadgetRoom" />
        {!authPage && (
          <Box className="navigation-pages">
            {pages.map((p) => (
              <Typography component="a" key={p} className="navigation-page">
                {p}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      {!authPage ? (
        <Box className="navigation-icons">
          {icons.map((icon) => (
            <a href="#" key={icon} className="navigation-icon">
              {icon === Cart ? (
                <Badge badgeContent={orderLength} color="primary">
                  <img src={icon} alt="icon" />
                </Badge>
              ) : (
                <img src={icon} alt="icon" />
              )}
            </a>
          ))}
        </Box>
      ) : (
        <Box className="navigation-auth">
          {authButtons.map((authButton) => (
            <a key={authButton} href="#" className={authButton === page ? 'active' : undefined}>
              {authButton}
            </a>
          ))}
        </Box>
      )}
    </Box>
  );
};
