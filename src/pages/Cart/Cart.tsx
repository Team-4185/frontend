import {
  Container,
  Box,
  Grid,
  Divider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { Footer } from '../../shared/ui/Footer/Footer';
import { Header } from '../../widgets/Header/Header';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Lock from '/icons/lock.svg';
import Voucher from '/icons/voucher.svg';
import ExpandMoreIcon from '/icons/ExpandMore.svg';
import './Cart.css';

type CartProps = {
  orderLength?: number;
};

export const Cart: React.FC<CartProps> = ({ orderLength = 2 }) => {
  const products = [
    {
      id: 1,
      img: '/icons/greyBox.png',
      name: 'iPhone 15 Pro MAX 256 GB',
      color: 'Color: Black',
      amount: 1,
      price: '850',
    },
    {
      id: 2,
      img: '/icons/greyBox.png',
      name: 'Silicon Case for iPhone 15 Pro MAX',
      color: 'Color: Storm Blue',
      amount: 1,
      price: '25.50',
    },
  ];

  return (
    <>
      <Header page="Cart" orderLength={0} product="" />
      <Container disableGutters maxWidth="xl" className="cart-container">
        <Box className="cart-content">
          {/* Левая часть */}
          <Box className="cart-left">
            <div className="cart-title">Cart {orderLength ? `(${orderLength})` : null}</div>

            <Box sx={{ width: '100%' }}>
              <Grid container spacing={0} sx={{ width: '100%' }}>
                <Grid size={6}>
                  <span className="cart-grid-header">Product</span>
                </Grid>
                <Grid size={3}>
                  <span className="cart-grid-header">Amount</span>
                </Grid>
                <Grid size={3} sx={{ textAlign: 'end' }}>
                  <span className="cart-grid-header">Subtotal</span>
                </Grid>
              </Grid>

              <Divider sx={{ mt: '8px', mb: '22px' }} />

              {products.map((product, idx) => (
                <div key={product.id}>
                  {idx === 0 ? null : <Divider sx={{ mt: '22px', mb: '20px' }} />}

                  <Box className="cart-product">
                    <img className="cart-product-img" src={product.img} alt={product.name} />
                    <Box className="cart-product-info">
                      <span className="cart-product-name">{product.name}</span>
                      <span className="cart-product-color">{product.color}</span>
                    </Box>

                    <Box className="cart-amount-box">
                      <button className="cart-btn">
                        <RemoveIcon />
                      </button>
                      <span>{product.amount}</span>
                      <button className="cart-btn">
                        <AddIcon />
                      </button>
                    </Box>

                    <Box className="cart-subtotal">€ {product.price}</Box>
                  </Box>

                  {idx === products.length - 1 ? <Divider sx={{ mt: '22px' }} /> : null}
                </div>
              ))}
            </Box>
          </Box>

          {/* Правая часть */}
          <Box className="cart-right">
            <span className="cart-summary-title">Order Summary</span>
            <Divider sx={{ mt: '31px', mb: '29px' }} />

            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
              <Box className="cart-summary-row">
                <div className="cart-summary-label">Subtotal</div>
                <div className="cart-summary-value">€ 875.50</div>
              </Box>
              <Box className="cart-summary-row">
                <div className="cart-summary-label">Tax</div>
                <div className="cart-summary-value">€ 00.00</div>
              </Box>
              <Box className="cart-summary-row">
                <div className="cart-summary-label">Shipping</div>
                <div className="cart-summary-value">€ 13.00</div>
              </Box>
            </Box>

            <Divider sx={{ mt: '32px', mb: '49px' }} />

            <Box className="cart-total">
              <div className="cart-total-label">Total</div>
              <div className="cart-total-value">€ 888.50</div>
            </Box>

            <button className="cart-btn-payment">
              <img src={Lock} alt="Lock" /> continue to payment
            </button>

            <Accordion
              sx={{
                mt: '30px',
                mb: '30px',
                border: 'none',
                boxShadow: 'none',
                background: 'none',
                '&:before': { display: 'none' },
                alignItems: 'center',
              }}
            >
              <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                <Typography className="cart-voucher-text">
                  <img src={Voucher} alt="voucher" />
                  <span className="cart-voucher-text">Use discount voucher</span>
                  <span className="cart-voucher-optional">(optional)</span>
                  <img src={ExpandMoreIcon} alt="Expand More" />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
