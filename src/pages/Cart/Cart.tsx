import { Container, Box, Grid, Divider } from '@mui/material';
import { OrderSummary } from '../../shared/ui/Cart/OrderSummary';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TrashIcon from '/icons/trash.svg';
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
                    <Box>
                      <img className="cart-product-img" src={product.img} alt={product.name} />
                      <Box className="cart-product_delete">
                        <img src={TrashIcon} alt="trash"></img>
                        <span>Delete</span>
                      </Box>
                    </Box>
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
          <OrderSummary />
        </Box>
      </Container>
    </>
  );
};
