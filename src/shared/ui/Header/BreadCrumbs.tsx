import { Container, Box } from '@mui/material';
import Home from '/icons/Home.svg';
import RightArrow from '/icons/SmallArrowRigth.svg';
type BreadCrumbsProps = {
  page?:
    | 'Home'
    | 'Catalog'
    | 'About us'
    | 'Login'
    | 'Register'
    | 'Cart'
    | 'Shipping details'
    | 'Payment';
  product?: string;
};
export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ page, product }) => {
  const catalog = page === 'Catalog';
  return (
    <>
      {product ? (
        <Container
          disableGutters
          maxWidth="xl"
          sx={{ padding: '15px 0px', mt: '28px' }}
          component={'div'}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'start',
              height: '20px',
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                gap: '2px',
              }}
            >
              <img src={Home} alt="Home icon" />
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '16px',
                  color: '#000',
                }}
              >
                Home
              </span>
            </Box>
            <img src={RightArrow} alt="arrow icon" />
            <a
              href="#"
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              {page}
            </a>
            <img src={RightArrow} alt="arrow icon" />
            <span
              style={{
                fontWeight: '600',
                fontSize: '16px',
                color: '#000',
              }}
            >
              {product}
            </span>
          </Box>
        </Container>
      ) : catalog ? (
        <Container
          disableGutters
          maxWidth="xl"
          sx={{ padding: '15px 0px', mt: '28px' }}
          component={'div'}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'start',
              height: '20px',
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                gap: '2px',
              }}
            >
              <img src={Home} alt="Home icon" />
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '16px',
                  color: '#000',
                }}
              >
                Home
              </span>
            </Box>
            <img src={RightArrow} alt="arrow icon" />
            <a
              href="#"
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              {page}
            </a>
          </Box>
        </Container>
      ) : null}
    </>
  );
};
