import { Box, Typography, Badge } from '@mui/material';
import Search from '/icons/search.svg';
import User from '/icons/user.svg';
import Liked from '/icons/liked.svg';
import Cart from '/icons/cart.svg';
import Logo from '/icons/Logo.png';
import LogoText from '/icons/LogoText.svg';
import type React from 'react';

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
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          width: '714px',
          height: '44px',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <img src={Logo} alt="Logo" />
        <img src={LogoText} alt="GagdetRoom" />
        {!authPage ? (
          <Box sx={{ display: 'flex', gap: '28px', ml: '93px' }}>
            {pages.map((page) => (
              <Typography
                key={page}
                component="a"
                sx={{
                  fontWeight: '600',
                  fontSize: '18px',
                  fontFamily: 'Montserrat',
                  color: '#000',
                  cursor: 'pointer',
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>
        ) : null}
      </Box>
      {!authPage ? (
        <Box sx={{ display: 'flex', gap: '28px' }}>
          {icons.map((icon) => (
            <a href="#" key={icon}>
              {icon === Cart ? (
                <Badge badgeContent={orderLength} color="primary">
                  <img src={icon} alt="icon" style={{ width: '29px', height: '29px' }} />
                </Badge>
              ) : (
                <img src={icon} alt="icon" style={{ width: '29px', height: '29px' }} />
              )}
            </a>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: '28px' }}>
          {authButtons.map((authButton) => (
            <a
              key={authButton}
              href="#"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#302f2f',
                textTransform: 'uppercase',
                borderRadius: authButton === page ? '39px' : 0,
                padding: '8px',
                background: authButton === page ? 'rgba(174, 165, 165, 0.37)' : 0,
              }}
            >
              {authButton}
            </a>
          ))}
        </Box>
      )}
    </Box>
  );
};
