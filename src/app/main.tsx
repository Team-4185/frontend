import ReactDOM from 'react-dom/client';
import App from './App';
import { withRouter } from './providers/withRouter';
import { withSession } from './providers/withSession';
import { withStore } from './providers/withStore';

const Root = withRouter(withSession(withStore(App)));

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
