import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Text.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      {/* Левая анимированная панель */}
      <motion.div
        className="auth-side"
        animate={{ x: isLogin ? 0 : '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="loginText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="auth-message"
            >
              <h2>Welcome back</h2>
              <p>Please login to continue</p>
            </motion.div>
          ) : (
            <motion.div
              key="registerText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="auth-message"
            >
              <h2>Nice to meet you)</h2>
              <p>Just register to join with us</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="arrow">➡️</div>
      </motion.div>

      {/* Правая часть с формами */}
      <motion.div
        className="auth-form"
        animate={{ x: isLogin ? 0 : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="loginForm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Login</h3>
              <form>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Continue</button>
              </form>
              <p>
                Don't have an account? <span onClick={() => setIsLogin(false)}>Register</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="registerForm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Register</h3>
              <form>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat Password" />
                <button>Continue</button>
              </form>
              <p>
                Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
