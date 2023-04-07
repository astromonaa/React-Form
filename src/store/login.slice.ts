import { createSlice } from "@reduxjs/toolkit";

interface IState {
  login: string,
  password: string,
  showModal: boolean,
  isAuth: boolean,
  resetingLogin: string
}

const initialState:IState = {
  login: '+71111111111',
  password: '123456',
  showModal: false,
  isAuth: false,
  resetingLogin: '',
}

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
    setResetingLogin(state, action) {
      state.resetingLogin = action.payload
    }
  }
})

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;