import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

  interface IProps {
    children: ReactNode;
  }

  const PrivateRoute = ({ children }: IProps) => {

    const {user: reduxUser} = useAppSelector((state) => state.user)
    console.log(reduxUser)

    const { pathname } = useLocation();


    if (!reduxUser?.email) {
      return <Navigate to="/signin" state={{ path: pathname }}></Navigate>;
    }
    return children;
  };


export default PrivateRoute;
