import { Container } from '@mui/material';
import { OrderingSteps } from '../../shared/ui/Header/OrderingSteps';
import { Navigation } from '../../shared/ui/Header/Navigation';
import { BreadCrumbs } from '../../shared/ui/Header/BreadCrumbs';

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
  product?: string;
};

export const Header: React.FC<HeaderProps> = ({ page, orderLength, product }) => {
  return (
    <Container disableGutters maxWidth="xl" sx={{ padding: '28px 34px' }} component={'header'}>
      <Navigation orderLength={orderLength} page={page} />
      <OrderingSteps page={page} />
      <BreadCrumbs page={page} product={product} />
    </Container>
  );
};
