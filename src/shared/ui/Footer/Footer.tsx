import { Box, Container } from '@mui/material';
import Logo from '/icons/Logo.png';
import LogoText from '/icons/LogoText.svg';
import Location from '/icons/Location.svg';
import Clock from '/icons/Clock.svg';
import Phone from '/icons/Phone.svg';
import Mail from '/icons/Mail.svg';
import Visa from '/icons/Payment Services/visa.png';
import MasterCard from '/icons/Payment Services/mastercard.png';
import ApplePay from '/icons/Payment Services/ApplePay.png';
import GooglePay from '/icons/Payment Services/GooglePay.png';
import NovaPost from '/icons/Payment Services/NovaPost.png';
import DHL from '/icons/Payment Services/DHL.png';

export const Footer = () => {
  return (
    <Container
      component="footer"
      disableGutters
      maxWidth="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f2f2f2',
        height: '302px',
      }}
    >
      {/* Общая коробка */}
      <Box
        component="div"
        sx={{ maxWidth: '1110px', height: 'max-content', display: 'flex', gap: '267px' }}
      >
        {/* Первая колонка */}
        <Box
          component="div"
          sx={{
            maxWidth: '353px',
            height: 'max-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
          }}
        >
          <Box component="div" sx={{ display: 'flex', gap: '5px' }}>
            <img src={Logo} alt="Logo" />
            <img src={LogoText} alt="GadgetRoom" />
          </Box>
          <Box component="div">
            <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '150%', color: '#000' }}>
              Online store of smartphones and gadgets. Official suppliers, quality guarantee, fast
              delivery throughout Ukraine.
            </p>
          </Box>
        </Box>
        {/* Первая колонка */}
        {/* Вторая колонка */}
        <Box sx={{ display: 'flex', gap: '93px' }}>
          {/* CONTACTS */}
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '222px',
              textWrap: 'nowrap',
            }}
          >
            <span
              style={{
                fontWeight: '700',
                fontSize: '16px',
                textTransform: 'uppercase',
                color: '#000',
              }}
            >
              Contacts
            </span>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <img src={Location} alt="Location icon" />
              <span>Kyiv, Khreshchatyk St., 42</span>
            </Box>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <img src={Clock} alt="Clock icon" />
              <span>Mon-Sun: 09:00-21:00</span>
            </Box>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <img src={Phone} alt="Phone icon" />
              <span>0 800 123 456</span>
            </Box>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <img src={Mail} alt="Mail icon" />
              <span>info@gatgetroom.ua</span>
            </Box>
          </Box>
          {/* CONTACTS */}
          {/* PAYMENT & DELIVETY */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontWeight: '700',
                fontSize: '16px',
                textTransform: 'uppercase',
                color: '#000',
                width: '187px',
                textWrap: 'nowrap',
              }}
            >
              Payment & Delivery{' '}
            </span>
            <Box
              sx={{ display: 'flex', gap: '22px', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src={Visa} alt="Visa" />
              <img src={MasterCard} alt="MasterCard" />
              <img src={ApplePay} alt="ApplePay" />
              <img src={GooglePay} alt="GooglePay" />
            </Box>
            <Box
              sx={{ display: 'flex', gap: '22px', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src={NovaPost} alt="NovaPost" />
              <img src={DHL} alt="DHL" />
            </Box>
          </Box>
        </Box>
        {/* Вторая колонка */}
      </Box>
    </Container>
  );
};
