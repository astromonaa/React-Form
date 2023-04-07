import { FC } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { ITemplateProps } from '../../types/types';

const LoginForm:FC<ITemplateProps> = ({setForgot}) => {
  const {login, password, onLoginInput, onPasswordInput, onLogin, errrLogin, errrPassword} = useLogin()

  return (
    <>
      <label htmlFor="login">Введите логин</label>
      <input onInput={onLoginInput} value={login} className='input' type="text" id="login" />
      {errrLogin ? <small className='error'>Неверный логин</small> : ''}
      <label htmlFor="password">Введите пароль</label>
      <input onInput={onPasswordInput} value={password} className='input' type="text" id="password" />
      {errrPassword ? <small className='error'>Неверный пароль</small> : ''}
      <a href='#' className='password-forgot' onClick={() => setForgot(true)}>Забыли пароль?</a>
      <button onClick={onLogin}>Войти</button>
    </>
  );
};

export default LoginForm;