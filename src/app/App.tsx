import { Cart } from '../pages/Cart/Cart';

import { Payment } from '../pages/Payment/Payment';

import { Delivery } from '../pages/Delivery/Delivery';
import { AuthPage } from '../pages/AuthPage/AuthPage';

import './App.css';

function App() {
  return (
    <>
      <AuthPage />
      <hr style={{ height: '10px', background: 'black' }} />
      <Delivery />
      <hr style={{ height: '10px', background: 'black' }} />
      <Payment />
      <hr style={{ height: '10px', background: 'black' }} />
      <Cart />
      <hr style={{ height: '10px', background: 'black' }} />
    </>
  );
}

export default App;
