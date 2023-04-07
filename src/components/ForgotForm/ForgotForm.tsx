import { FC } from 'react';
import { useActions } from '../../hooks/actions';
import { useLogin } from '../../hooks/useLogin';
import { ITemplateProps } from '../../types/types';
import './forgotForm.scss'

const ForgotForm:FC<ITemplateProps> = ({setForgot}) => {
  const {setShowModal, setResetingLogin} = useActions()
  const {login, onLoginInput} = useLogin()

  const onPasswordReset = () => {
    login.trim().length && setShowModal(true) && setResetingLogin(login)
  }

  return (
    <>
      <span className='reset-title'>Восстановление пароля</span>
      <label htmlFor="reset">Введите номер телефона </label>
      <input value={login} onInput={onLoginInput} type="tel" id="reset" className='reset-tel'/>
      <a href='#' className="back" onClick={() => setForgot(false)}>назад</a>
      <button className='call' onClick={onPasswordReset}>ПОЗВОНИТЬ</button>
    </>
  );
};

export default ForgotForm;