import { FC, useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useLogin } from '../../hooks/useLogin';
import { ITemplateProps } from '../../types/types';
import './forgotForm.scss'
import { useAppSelector } from '../../hooks/hooks';

const ForgotForm:FC<ITemplateProps> = ({setForgot}) => {
  const {setShowModal, setResetingLogin} = useActions()
  const {login, onLoginInput, errorLogin, setErrorLogin} = useLogin()
  const {login: stateLogin} = useAppSelector(state => state.login)

  const onPasswordReset = () => {
    if (login === stateLogin) {
      setErrorLogin(false)
      login.trim().length && setShowModal(true) && setResetingLogin(login)
    }else {
      setErrorLogin(true)
    }
  }

  return (
    <>
      <span className='reset-title'>Восстановление пароля</span>
      <label htmlFor="reset">Введите номер телефона </label>
      <input value={login} onInput={onLoginInput} type="tel" id="reset" className='reset-tel'/>
      {errorLogin ? <small className="error">Неверный логин</small> : ''}
      <a href='#' className="back" onClick={() => setForgot(false)}>назад</a>
      <button className='call' onClick={onPasswordReset}>ПОЗВОНИТЬ</button>
    </>
  );
};

export default ForgotForm;