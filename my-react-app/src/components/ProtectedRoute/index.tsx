import { Navigate, Outlet } from "react-router-dom";
import { useUserTokenState } from "../../store/userToken";

interface ProtectedRouteProps {
  component: React.ReactNode;
}

const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
  const userId = useUserTokenState((state) => state.userToken);

  return (
    <>
      {userId.length > 0 ? <>{component}</> : <Navigate to="/" replace />}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
