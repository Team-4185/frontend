import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSession } from '../../entities/session/model/session';

export const ProtectedRoute = () => {
  const { user } = useSession();
  const location = useLocation();
  if (!user) return <Navigate to="/auth" state={{ from: location }} replace />;
  return <Outlet />;
};
