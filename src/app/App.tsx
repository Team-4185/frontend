import { Cart } from '../pages/Cart/Cart';
import { Login } from '../pages/Login/Login';
import { Registration } from '../pages/Registration/Registration';
import './App.css';

function App() {
  return (
    <>
      <Cart />
      <hr style={{ height: '10px', background: 'black' }} />
      <Registration />
      <hr style={{ height: '10px', background: 'black' }} />
      <Login />
    </>
  );
}

export default App;
