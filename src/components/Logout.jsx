import React from 'react'
import { useDispatch } from 'react-redux';
import { logOutUser } from '../redux/Auth/auth.actions';

const Logout = () => {
    const dispatch = useDispatch();
    const logOut =()=>{
        dispatch(logOutUser());
    }
  return (
    <button onClick={logOut}>Log out</button>
  )
}

export default Logout