import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

  interface IProps {
    children: ReactNode;
  }

  const PrivateRoute = ({ children }: IProps) => {

    const { user } = useAppSelector((state) => state.user);

    const { pathname } = useLocation();


    if (!user?.email) {
      return <Navigate to="/signin" state={{ path: pathname }}></Navigate>;
    }
    return children;
  };


export default PrivateRoute;
