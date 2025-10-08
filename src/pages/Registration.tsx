import { Container, Box, TextField } from '@mui/material';
import { Footer } from '../shared/ui/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import ArrowRight from '/icons/ArrowRight.svg';

export const Registration = () => {
  return (
    <>
      <Header page="Register" product="" orderLength={0} />
      <Container
        component="section"
        maxWidth="xl"
        disableGutters
        sx={{
          padding: '60px 0',
          height: 'max-content',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Основной */}
        <Box
          component="div"
          sx={{
            maxWidth: '1440px',
            height: 'max-content',
            display: 'flex',
            background: 'rgba(151, 151, 151, 0.13)',
            borderRadius: '50px',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            padding: '0px 58px 0px 0px',
          }}
        >
          {/* Левый */}
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '627px',
              borderTopRightRadius: '50px',
              background: '#fff',
              alignItems: 'start',
              justifyContent: 'center',
              padding: '269px 80px 30px 80px',
            }}
          >
            <Box sx={{ maxWidth: '468', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '60px',
                  lineHeight: '93%',
                  color: '#000',
                  textWrap: 'wrap',
                }}
              >
                Nice to meet you)
              </span>
              <span style={{ fontWeight: '500', fontSize: '28px' }}>
                Just register to join with us
              </span>
              <img
                src={ArrowRight}
                alt=""
                style={{ maxWidth: '218px', maxHeight: '222px', alignSelf: 'end' }}
              />
            </Box>
          </Box>
          {/* Левый */}
          {/* Правый */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '50%',
              padding: '98px 45px',
            }}
          >
            <Box sx={{ width: '535px', display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '36px',
                  color: '#000',
                  marginBottom: '35px',
                }}
              >
                Register
              </span>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <TextField
                  sx={{
                    border: '1px solid rgba(0,0,0,0.42)',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(0, 0, 0, 0.54)',
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        top: '25%',
                        left: '15px',
                        transform: 'translateY(0)',
                        '&.MuiInputLabel-shrink': {
                          transform: 'translateY(-10px) scale(0.65)',
                          color: '#474747',
                          fontSize: '15px',
                          fontWeight: '400',
                        },
                      },
                    },
                  }}
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    border: '1px solid rgba(0,0,0,0.42)',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(0, 0, 0, 0.54)',
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        top: '25%',
                        left: '15px',
                        transform: 'translateY(0)',
                        '&.MuiInputLabel-shrink': {
                          transform: 'translateY(-10px) scale(0.65)',
                          color: '#474747',
                          fontSize: '15px',
                          fontWeight: '400',
                        },
                      },
                    },
                  }}
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    border: '1px solid rgba(0,0,0,0.42)',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(0, 0, 0, 0.54)',
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        top: '25%',
                        left: '15px',
                        transform: 'translateY(0)',
                        '&.MuiInputLabel-shrink': {
                          transform: 'translateY(-10px) scale(0.65)',
                          color: '#474747',
                          fontSize: '15px',
                          fontWeight: '400',
                        },
                      },
                    },
                  }}
                  id="emailAddress"
                  label="Email Address"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    border: '1px solid rgba(0,0,0,0.42)',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(0, 0, 0, 0.54)',
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        top: '25%',
                        left: '15px',
                        transform: 'translateY(0)',
                        '&.MuiInputLabel-shrink': {
                          transform: 'translateY(-10px) scale(0.65)',
                          color: '#474747',
                          fontSize: '15px',
                          fontWeight: '400',
                        },
                      },
                    },
                  }}
                  type="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    border: '1px solid rgba(0,0,0,0.42)',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    '& .MuiOutlinedInput-root': {
                      color: 'rgba(0, 0, 0, 0.54)',
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        top: '25%',
                        left: '15px',
                        transform: 'translateY(0)',
                        '&.MuiInputLabel-shrink': {
                          transform: 'translateY(-10px) scale(0.65)',
                          color: '#474747',
                          fontSize: '15px',
                          fontWeight: '400',
                        },
                      },
                    },
                  }}
                  type="password"
                  id="repeatPassword"
                  label="Repeat Password"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: '549px',
                maxHeight: '115px',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '23px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                }}
              >
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: 'black',
                    backgroundColor: 'white',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: ' rgba(0, 0, 0, 0.44)',
                    fontSize: '16px',
                    fontWeight: '400',
                  }}
                >
                  <span style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                    I have read and accept the Terms of{' '}
                  </span>
                  <span>Service & Privacy Policy *</span>
                </Box>
              </Box>
              <Box>
                <button
                  style={{
                    width: '100%',
                    marginTop: '32px',
                    height: '36px',
                    background: '#fff',
                    fontWeight: '600',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: '#000',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }}
                >
                  Contunue
                </button>
              </Box>
            </Box>
          </Box>
          {/* Правый */}
        </Box>
        {/* Основной */}
      </Container>
      <Footer />
    </>
  );
};
