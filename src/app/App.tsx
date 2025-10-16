import './App.css';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { About } from '../pages/About/About';
import { Home } from '../pages/Home/Home';
import { Catalog } from '../pages/Catalog/Catalog';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from '../shared/ui/Footer/Footer.tsx';
import { Delivery } from '../pages/Delivery/Delivery.tsx';
import { Payment } from '../pages/Payment/Payment.tsx';
import { Cart } from '../pages/Cart/Cart.tsx';
import { Header } from '../widgets/Header/Header.tsx';

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pageMap: Record<string, any> = {
    '/cart': 'Cart',
    '/auth': location.state?.mode === 'register' ? 'Register' : 'Login',
    '/delivery': 'Delivery',
    '/payment': 'Payment',
  };

  const page = pageMap[currentPath]; // undefined for other pages

  return (
    <div className="app-container">
      <Header page={page} orderLength={page?2:0}/>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
