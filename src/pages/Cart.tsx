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
import { Footer } from '../shared/ui/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Lock from '/icons/lock.svg';
import Voucher from '/icons/voucher.svg';
import ExpandMoreIcon from '/icons/ExpandMore.svg';

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
      <Container disableGutters maxWidth="xl" sx={{ padding: '95px 30px 150px 30px' }}>
        {/* Общий */}
        <Box sx={{ maxWidth: '100%', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {/* Левый */}
          <Box
            sx={{
              width: '761px',
              height: 'max-content',
              mr: '25px',
            }}
          >
            <Box
              style={{ fontWeight: '600', fontSize: '40px', color: '#000', marginBottom: '48px' }}
            >
              Cart {orderLength ? `(${orderLength})` : null}
            </Box>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={0} sx={{ width: '100%' }}>
                <Grid size={6}>
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>
                    Product
                  </span>
                </Grid>
                <Grid size={3}>
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>
                    Amount
                  </span>
                </Grid>
                <Grid size={3} sx={{ textAlign: 'end' }}>
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>
                    Subtotal
                  </span>
                </Grid>
              </Grid>
              <Divider sx={{ mt: '8px', mb: '22px' }} />
              {products.map((product, idx) => (
                <>
                  {idx === 0 ? null : <Divider sx={{ mt: '22px', mb: '20px' }} />}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ marginRight: '19px' }} src={product.img} alt={product.name} />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '212px',
                        wordWrap: 'wrap',
                        mr: '40px',
                      }}
                    >
                      <span style={{ fontWeight: '600', fontSize: '15px', color: '#000' }}>
                        {product.name}
                      </span>
                      <span style={{ fontWeight: '600', fontSize: '14px', color: '#727070' }}>
                        {product.color}
                      </span>
                    </Box>
                    <Box
                      sx={{
                        width: '100px',
                        borderRadius: '22px',
                        padding: '6px 9px',
                        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mr: '225px',
                      }}
                    >
                      <button
                        style={{
                          border: 'none',
                          background: 'inherit',
                          cursor: 'pointer',
                        }}
                      >
                        <RemoveIcon />
                      </button>
                      <span>{product.amount}</span>
                      <button
                        style={{
                          border: 'none',
                          background: 'inherit',
                          cursor: 'pointer',
                        }}
                      >
                        <AddIcon />
                      </button>
                    </Box>
                    <Box>€ {product.price}</Box>
                  </Box>
                  {idx === products.length - 1 ? <Divider sx={{ mt: '22px' }} /> : null}
                </>
              ))}
            </Box>
          </Box>
          {/* Левый */}
          {/* Правый */}
          <Box
            sx={{
              width: '503px',
              borderRadius: '37px',
              padding: '29px 30px',
              boxShadow: ' 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              background: '#f9f9f9',
            }}
          >
            <span style={{ fontWeight: '700', fontSize: '20px', color: '#000' }}>
              Order Summary
            </span>
            <Divider sx={{ mt: '31px', mb: '29px' }} />
            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>
                  Subtotal
                </div>
                <div style={{ fontWeight: '500', fontSize: '15px', color: '#000' }}>€ 875.50</div>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>Tax</div>
                <div style={{ fontWeight: '500', fontSize: '15px', color: '#000' }}>€ 00.00</div>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>
                  Shipping
                </div>
                <div style={{ fontWeight: '500', fontSize: '15px', color: '#000' }}>€ 13.00</div>
              </Box>
            </Box>
            <Divider sx={{ mt: '32px', mb: '49px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '40px' }}>
              <div style={{ fontWeight: '600', fontSize: '16px', color: '#727070' }}>Total</div>
              <div style={{ fontWeight: '700', fontSize: '20px', color: '#000' }}>€ 888.50</div>
            </Box>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                borderRadius: '24px',
                padding: '8px',
                background: '#fff',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontWeight: '600',
                fontSize: '16px',
                color: '#000',
              }}
            >
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
                <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#000' }}>
                  <img src={Voucher} alt="voucher" /> Use discount voucher{' '}
                  <span style={{ color: '#727070' }}>(optional)</span>
                  <img style={{ marginLeft: '4px' }} src={ExpandMoreIcon} alt="Expand More" />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Правый */}
        </Box>
        {/* Общий */}
      </Container>
      <Footer />
    </>
  );
};
