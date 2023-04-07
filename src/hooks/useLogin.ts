import { KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react';
import { useAppSelector } from './hooks';
import { useNavigate } from 'react-router-dom';
import { useActions } from './actions';

enum CODES {
  RU = '+7'
}

export function useLogin() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  const navigate = useNavigate()
  const {setIsAuth, setResetingLogin} = useActions()

  const {login: stateLogin, password: statePasword, resetingLogin} = useAppSelector(state => state.login)

  useEffect(() => {
    setLogin(resetingLogin)
  }, [])

  const onLoginInput = (event:KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const regExp = new RegExp(/[a-z+&$@#?%()_=|\\,<>!*-/.^[\]{}"';:]/gi)
    
    if (regExp.test(target.value.slice(1)) || target.value.length > 12) {
      return
    }
    const filteredNumbers = target.value?.match(/\d/)?.input || ''
    let loginValue = (login.trim().length < 1 && filteredNumbers?.length && !filteredNumbers?.startsWith(CODES.RU)) ? CODES.RU + filteredNumbers : filteredNumbers;
    loginValue = !loginValue?.startsWith(CODES.RU) ? loginValue?.slice(0, 1)! + loginValue?.slice(2) + loginValue?.slice(1, 2) : loginValue
    
    setLogin(loginValue)
  }
  const onPasswordInput = (event:KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setPassword(target.value)
  }

  const onLogin = () => {
    setErrorLogin(false)
    setErrorPassword(false)
    const isLoginInvalid = checkLogin()
    const isPasswordInvalid = checkPassword()

    if (isLoginInvalid || isPasswordInvalid) {
      return
    }

    setIsAuth(true)
    setResetingLogin('')
    navigate('/main')
    localStorage.setItem('isAuth', 'true')
  }

  const checkLogin = () => {
    const isLoginInvalid = login !== stateLogin
    setErrorLogin(isLoginInvalid)
    return isLoginInvalid
  }
  const checkPassword = () => {
    const isPasswordInvalid = password.trim() !== statePasword
    setErrorPassword(isPasswordInvalid)
    return isPasswordInvalid
  }

  return {
    login, password, onLoginInput, onPasswordInput, onLogin, errorLogin, errorPassword
  }
}