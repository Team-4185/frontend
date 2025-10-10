import {
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import Lock from '/icons/lock.svg';
import Voucher from '/icons/voucher.svg';
import ExpandMoreIcon from '/icons/ExpandMore.svg';
import '../../../pages/Cart/Cart.css';

export const OrderSummary = () => {
  return (
    <>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
