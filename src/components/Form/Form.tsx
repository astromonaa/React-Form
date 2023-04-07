import { FC } from 'react';
import Logo from '../../assets/logo.png'
import { IFormProps } from '../../types/types';
import './form.scss'

const Form:FC<IFormProps> = ({children}) => {
  
  return (
    <form action="#" className="form" onSubmit={e => e.preventDefault()}>
      <img src={Logo} alt="Логотип приложения" />
      {children}
    </form>
  );
};

export default Form;