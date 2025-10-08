import { Container, Box } from '@mui/material';
import CheckMark from '/icons/checkMark.svg';

type OrderingStepsProps = {
  page?:
    | 'Home'
    | 'Catalog'
    | 'About us'
    | 'Login'
    | 'Register'
    | 'Cart'
    | 'Shipping details'
    | 'Payment';
};

export const OrderingSteps: React.FC<OrderingStepsProps> = ({ page }) => {
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
    </>
  );
};
