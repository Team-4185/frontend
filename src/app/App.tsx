import { Cart } from '../pages/Cart/Cart';
import { Login } from '../pages/Login/Login';
import { Payment } from '../pages/Payment/Payment';
import { Registration } from '../pages/Registration/Registration';
import { ShippingDetails } from '../pages/Shipping details/ShippingDetails';
import './App.css';

function App() {
  return (
    <>
      <Payment />
      <hr style={{ height: '10px', background: 'black' }} />
      <ShippingDetails />
      <hr style={{ height: '10px', background: 'black' }} />
      <Cart />
      <hr style={{ height: '10px', background: 'black' }} />
      <Registration />
      <hr style={{ height: '10px', background: 'black' }} />
      <Login />
    </>
  );
}

export default App;
