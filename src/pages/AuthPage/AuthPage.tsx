import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Box, TextField } from '@mui/material';
import { Footer } from '../../shared/ui/Footer/Footer';
import { Header } from '../../widgets/Header/Header';
import { Input } from '../../shared/ui/Input/Input';
import ArrowRight from '/icons/ArrowRight.svg';
import ArrowLeft from '/icons/ArrowLeft.svg';
import './AuthPage.css';
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <>
      <Header
        page={isLogin ? 'Register' : 'Login'}
        product=""
        orderLength={0}
        handleLogin={handleLogin}
      />
      <Container maxWidth="xl" disableGutters sx={{ padding: '60px 0' }}>
        <Box sx={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px' }}>
          <Box
            sx={{
              display: 'flex',
              minHeight: '800px',
              background: '#fff',
              borderRadius: '50px',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Белая анимированная панель (фон) */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                width: '50%',
                height: '100%',
                background: 'rgba(151, 151, 151, 0.13)',
                borderTopLeftRadius: isLogin ? '0px' : '50px',
                borderBottomLeftRadius: isLogin ? '0px' : '50px',
                borderTopRightRadius: isLogin ? '50px' : '0px',
                borderBottomRightRadius: isLogin ? '50px' : '0px',
              }}
              animate={{
                left: isLogin ? '0%' : '50%',
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            {/* Левая половина с контентом */}
            <Box sx={{ position: 'relative', width: '50%', zIndex: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 40px',
                  minHeight: '800px',
                }}
              >
                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div
                      key="registerForm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{ width: '100%', maxWidth: '480px' }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
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

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          {['Email Address', 'Password', 'Repeat Password'].map((label, index) => (
                            <Input
                              key={index}
                              type={label.includes('Password') ? 'password' : 'text'}
                              label={label}
                              sx={{
                                width: '100%',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                boxSizing: 'border-box',
                              }}
                            />
                          ))}
                        </Box>

                        <Box
                          sx={{
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <input
                              type="checkbox"
                              name="terms"
                              id="terms"
                              style={{ width: '18px', height: '18px', accentColor: 'black' }}
                            />
                            <Box style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)' }}>
                              <Box>I have read and accept the Terms of</Box>
                              <Box>Service & Privacy Policy *</Box>
                            </Box>
                          </Box>
                          <button
                            style={{
                              fontFamily: 'Montserrat, sans-serif',
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
                            Continue
                          </button>
                        </Box>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="welcomeText"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{ width: '100%', padding: '0 80px' }}
                    >
                      <Box sx={{ maxWidth: '480px' }}>
                        <span
                          style={{
                            fontWeight: '700',
                            fontSize: '56px',
                            color: '#000',
                            display: 'block',
                            marginBottom: '20px',
                          }}
                        >
                          Welcome back
                        </span>
                        <span
                          style={{
                            fontWeight: '500',
                            fontSize: '24px',
                            color: '#000',
                            display: 'block',
                            marginBottom: '30px',
                          }}
                        >
                          Please login to continue
                        </span>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <img src={ArrowRight} alt="" />
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>

            {/* Правая половина с контентом */}
            <Box sx={{ position: 'relative', width: '50%', zIndex: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px 40px',
                  boxSizing: 'border-box',
                  minHeight: '800px',
                }}
              >
                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div
                      key="niceText"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{ width: '100%', padding: '0 80px' }}
                    >
                      <Box sx={{ maxWidth: '480px' }}>
                        <span
                          style={{
                            fontWeight: '700',
                            fontSize: '56px',
                            color: '#000',
                            display: 'block',
                            marginBottom: '20px',
                          }}
                        >
                          Nice to meet you)
                        </span>
                        <span
                          style={{
                            fontWeight: '500',
                            fontSize: '24px',
                            color: '#000',
                            display: 'block',
                            marginBottom: '30px',
                          }}
                        >
                          Just register to join with us
                        </span>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <img src={ArrowLeft} alt="" />
                        </Box>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="loginForm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{ width: '100%', maxWidth: '480px' }}
                    >
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <span
                          style={{
                            fontWeight: '600',
                            fontSize: '36px',
                            color: '#000',
                            marginBottom: '35px',
                          }}
                        >
                          Login
                        </span>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <Input
                            type="email"
                            label="Email Address"
                            sx={{
                              width: '100%',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.7)',
                              border: '1px solid #ccc',
                              fontSize: '16px',
                            }}
                          />
                          <Input
                            type="password"
                            label="Password"
                            sx={{
                              width: '100%',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.7)',
                              border: '1px solid #ccc',
                              fontSize: '16px',
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            marginTop: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <input
                                style={{
                                  width: '18px',
                                  height: '18px',
                                  accentColor: ' black',
                                  backgroundColor: 'white',
                                }}
                                type="checkbox"
                                id="remember"
                              />
                              <span>Remember</span>
                            </Box>
                            <button
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#777',
                                cursor: 'pointer',
                                fontSize: '15px',
                              }}
                            >
                              Forgot Password?
                            </button>
                          </Box>
                          <button
                            style={{
                              fontFamily: 'Montserrat, sans-serif',
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
                            Continue
                          </button>
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
