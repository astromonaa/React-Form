import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/actions';

const Main = () => {
  const {isAuth} = useAppSelector(state => state.login)
  const {setIsAuth} = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth) {
      navigate('/')
    }
  }, [isAuth])
  return (
    <>
      <button onClick={() => setIsAuth(false)} className='exit-btn'>Выход</button>
    </>
  );
};

export default Main;