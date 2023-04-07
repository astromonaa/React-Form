import Login from "../pages/Login";
import Main from "../pages/Main";

export const routes = [
  {
    path: '/',
    component: <Login/>,
    exact: true
  },
  {
    path: '/main',
    component: <Main/>,
    exact: true
  }
]