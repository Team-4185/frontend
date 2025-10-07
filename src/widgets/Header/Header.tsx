import { Container, Box, Typography, Badge } from '@mui/material';
import Logo from '/icons/Logo.png';
import LogoText from '/icons/LogoText.png';
import Search from '/icons/search.svg';
import User from '/icons/user.svg';
import Liked from '/icons/liked.svg';
import Cart from '/icons/cart.svg';
import CheckMark from '/icons/checkMark.svg';

type HeaderProps = {
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

export const Header: React.FC<HeaderProps> = ({ page, orderLength }) => {
  const pages = ['HOME', 'CATALOG', 'ABOUT US'];
  const icons = [Search, User, Liked, Cart];
  const authButtons = ['Login', 'Register'];
  const authPage = page === 'Login' || page === 'Register';
  const cartPage = page === 'Cart';
  const shippingPage = page === 'Shipping details';
  const paymentPage = page === 'Payment';
  const orderActivePage = {
    borderRadius: '50px',
    padding: '2px 9px',
    background: '#000',
    color: '#fff',
    width: '27px',
    height: '26px',
  };
  const orderInactivePage = {
    border: '1px solid #727070',
    borderRadius: '50px',
    padding: '2px 7px',
    fontWeight: '600',
    fontSize: '16px',
    width: '27px',
    height: '26px',
  };
  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ padding: '28px 34px' }} component={'header'}>
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
            <img src={Logo} alt="Logo" style={{}} />
            <img src={LogoText} alt="GagdetRoom" style={{}} />
            {!authPage ? (
              <Box sx={{ display: 'flex', gap: '28px', ml: '93px' }}>
                {pages.map((page) => (
                  <Typography
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
                <a href="#">
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
        {cartPage ? (
          <Container
            disableGutters
            maxWidth="xl"
            sx={{ padding: '15px 0px', mt: '28px' }}
            component={'div'}
          >
            <Box
              sx={{
                display: 'flex',
                width: '152px',
                height: '26px',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <span style={orderActivePage}>1</span>
              <span>{page}</span>
              <span style={orderInactivePage}>2</span>
              <span style={orderInactivePage}>3</span>
            </Box>
          </Container>
        ) : shippingPage ? (
          <Container
            disableGutters
            maxWidth="xl"
            sx={{ padding: '15px 0px', mt: '28px' }}
            component={'div'}
          >
            <Box
              sx={{
                display: 'flex',
                width: '251px',
                height: '26px',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <img src={CheckMark} style={orderInactivePage} />
              <span style={orderActivePage}>2</span>
              <span>{page}</span>
              <span style={orderInactivePage}>3</span>
            </Box>
          </Container>
        ) : paymentPage ? (
          <Container
            disableGutters
            maxWidth="xl"
            sx={{ padding: '15px 0px', mt: '28px' }}
            component={'div'}
          >
            <Box
              sx={{
                display: 'flex',
                width: '192px',
                height: '26px',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <img src={CheckMark} style={orderInactivePage} />
              <img src={CheckMark} style={orderInactivePage} />
              <span style={orderActivePage}>3</span>
              <span>{page}</span>
            </Box>
          </Container>
        ) : null}
      </Container>
    </>
  );
};
