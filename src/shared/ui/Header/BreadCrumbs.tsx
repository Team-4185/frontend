import { Container, Box } from '@mui/material';
import Home from '/icons/Home.svg';
import RightArrow from '/icons/SmallArrowRigth.svg';
import './Header.css';

type BreadCrumbsProps = {
  page?: 'Home' | 'Catalog' | 'About us' | 'Login' | 'Register' | 'Cart' | 'Delivery' | 'Payment';
  product?: string;
};

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ page, product }) => {
  const catalog = page === 'Catalog';
  return (
    <>
      {product ? (
        <Container disableGutters maxWidth="xl" className="breadcrumbs-container">
          <Box className="breadcrumbs-box">
            <Box component="a" href="#" className="breadcrumbs-home">
              <img src={Home} alt="Home icon" />
              <span>Home</span>
            </Box>
            <img src={RightArrow} alt="arrow icon" />
            <a href="#" className="breadcrumbs-link">
              {page}
            </a>
            <img src={RightArrow} alt="arrow icon" />
            <span className="breadcrumbs-product">{product}</span>
          </Box>
        </Container>
      ) : catalog ? (
        <Container disableGutters maxWidth="xl" className="breadcrumbs-container">
          <Box className="breadcrumbs-box">
            <Box component="a" href="#" className="breadcrumbs-home">
              <img src={Home} alt="Home icon" />
              <span>Home</span>
            </Box>
            <img src={RightArrow} alt="arrow icon" />
            <a href="#" className="breadcrumbs-link">
              {page}
            </a>
          </Box>
        </Container>
      ) : null}
    </>
  );
};
