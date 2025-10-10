import { Container, Box, MenuItem } from '@mui/material';
import { Footer } from '../../shared/ui/Footer/Footer';
import { Header } from '../../widgets/Header/Header';
import { OrderSummary } from '../../shared/ui/Cart/OrderSummary';
import { Input } from '../../shared/ui/Input/Input';
import { CheckBox } from '../../shared/ui/CheckBox/CheckBox';
import ExpandMore from '/icons/ExpandMore.svg';
import './ShippingDetails.css';

export const ShippingDetails = () => {
  return (
    <>
      <Header page="Shipping details" product="" orderLength={2} />
      <Container disableGutters maxWidth="xl" className="shipping-container">
        <Box className="shipping-wrapper">
          <Box className="shipping-form">
            <h1 className="shipping-title">Shipping details</h1>

            {/* Contact information */}
            <Box className="shipping-section">
              <Box className="shipping-section-header">
                <span className="shipping-subtitle">Contact information</span>
                <div>
                  <span className="text-muted">Already have an account? </span>
                  <a href="#" className="login-link">
                    Log in
                  </a>
                </div>
              </Box>

              <Input inherit id="contactEmail" label="Your Email" />

              <Box className="checkbox-row">
                <CheckBox name="contactCheckBox" id="contactCheckBox" />
                <span className="checkbox-label">Email me with news and offers</span>
              </Box>
            </Box>

            {/* Shipping address */}
            <Box className="shipping-section">
              <span className="shipping-subtitle">Shipping address</span>
              <Input inherit id="country" label="Ukraine" />
              <Box className="row">
                <Input inherit id="firstName" label="First Name" sx={{ width: '265px' }} />
                <Input inherit id="lastName" label="Last Name" sx={{ width: '265px' }} />
              </Box>
              <Input inherit id="adress" label="Address" />
              <Input inherit id="city" label="City" />
              <Box className="row">
                <Input sx={{ width: '265px' }} inherit select id="province" label="Province">
                  <MenuItem value="odessa">Odessa</MenuItem>
                  <MenuItem value="kyiv">Kyiv</MenuItem>
                </Input>
                <Input sx={{ width: '269px' }} inherit id="postalCode" label="Postal code" />
              </Box>
              <Input type="number" inherit id="phone" label="Phone" />
            </Box>

            {/* Shipping method */}
            <Box className="shipping-section">
              <span className="shipping-subtitle">Shipping Method</span>
              <Box className="shipping-method">
                <Box className="shipping-method-header">
                  <span className="method-title">Standard Shipping</span>
                  <Box className="method-price">
                    <span>€ 11.00</span>
                    <img src={ExpandMore} alt="Expand More" />
                  </Box>
                </Box>
                <span className="method-desc">Delivery in 5-7 days</span>
              </Box>
            </Box>
          </Box>

          <OrderSummary />
        </Box>
      </Container>
      <Footer />
    </>
  );
};
