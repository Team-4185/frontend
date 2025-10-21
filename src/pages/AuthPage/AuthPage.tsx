import { motion, AnimatePresence } from 'framer-motion';
import { Container, Box } from '@mui/material';
import { Input } from '../../shared/ui/Input/Input';
import ArrowRight from '/icons/ArrowRight.svg';
import ArrowLeft from '/icons/ArrowLeft.svg';
import './AuthPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api.tsx';


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/auth/register';

export const AuthPage = () => {
  const location = useLocation();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.mode) {
      setMode(location.state.mode);
    }
  }, [location.state]);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/home');
  };

  const handleLoginSubmit=(e:any)=>{
    e.preventDefault();
    console.log(e);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await api.post(
        '/auth/register',
        { email:email, password: pwd, passwordConfirmation: matchPwd },
        {
          headers: { 'Content-Type': 'application/json',
          'Accept': 'application/json'},
        }
      );
      console.log(response);
      console.log(JSON.stringify(response))
      // setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      // if (!err?.response) {
      //   setErrMsg('No Server Response');
      // } else if (err.response?.status === 409) {
      //   setErrMsg('Username Taken');
      // } else {
      //   setErrMsg('Registration Failed')
      // }
      // errRef.current.focus();
    }
  }

  return (
    <>
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
                borderRadius: '50px',
              }}
              animate={{
                left: mode !== 'login' ? '0%' : '50%',
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            {/* Левая половина с контентом */}
            <form onSubmit={handleRegisterSubmit}>
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
                    {mode != 'login' ? (
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
                            <Input
                              type="text"
                              label="Email Address"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              sx={{
                                width: '100%',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                boxSizing: 'border-box',
                              }}
                            />

                            <Input
                              type="password"
                              label="Password"
                              id="pwd"
                              value={pwd}
                              onChange={(e) => setPwd(e.target.value)}
                              sx={{
                                width: '100%',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                boxSizing: 'border-box',
                              }}
                            />

                            <Input
                              type="password"
                              label="Repeat Password"
                              id="confirm_pwd"
                              value={matchPwd}
                              onChange={(e) => setMatchPwd(e.target.value)}
                              sx={{
                                width: '100%',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                boxSizing: 'border-box',
                              }}
                            />
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
            </form>
            {/* Правая половина с контентом */}
            <form onSubmit={handleLoginSubmit}>
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
                    {mode != 'login' ? (
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
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
