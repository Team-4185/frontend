import { SessionProvider } from '../../entities/session/model/session';
export const withSession = (component: () => React.ReactNode) => () => (
  <SessionProvider>{component()}</SessionProvider>
);
