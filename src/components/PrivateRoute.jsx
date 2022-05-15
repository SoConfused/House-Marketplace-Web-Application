import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const {loggedIn, checkingStatus} = useAuthStatus() //destructures 2 values from the useAuthStatus hook and also check if user is logged in

  if (checkingStatus) {
      return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute