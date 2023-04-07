import { bindActionCreators } from "@reduxjs/toolkit";
import { loginActions } from "../store/login.slice";
import { useDispatch } from "react-redux";

const actions = {
  ...loginActions
}

export function useActions() {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}