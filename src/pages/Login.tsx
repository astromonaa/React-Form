import { useState } from "react";
import ForgotForm from "../components/ForgotForm/ForgotForm";
import Form from "../components/Form/Form";
import LoginForm from "../components/LoginForm/LoginForm";
import Modal from "../components/Modal/Modal";
import { useAppSelector } from "../hooks/hooks";

const Login = () => {
  const {password, showModal} = useAppSelector(state => state.login)
  const [forgot, setForgot] = useState(false)
  return (
    <>
      <Form>
        {!forgot ? <LoginForm setForgot={setForgot}/> : <ForgotForm setForgot={setForgot}/>}
      </Form>
      <Modal className={showModal ? "show-modal" : ""}>
        <p>
          Временный пароль: <b>{password}</b>
        </p>
      </Modal>
    </>
  );
};

export default Login;
