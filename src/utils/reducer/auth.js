/** @format */

import { getSessionData, setSessionData } from "../session";
import axios from "axios";
import api from "../api";

const type = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const defaultState = {
  isLogin: false,
  user: null,
};

export function AuthReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case type.LOGIN:
      return {
        isLogin: true,
        user: action.payload,
      };
    case type.LOGOUT:
      return {
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthAction = (() => {
  function Login(email, password) {
    return async (dispatch) => {
      try {
        const { data } = await api.login(email, password);

        const payload = {
          token: data.data.token,
        };

        setSessionData("auth", JSON.stringify(payload));
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        dispatch({
          type: type.LOGIN,
          payload,
        });
      } catch (err) {
        console.error(err);
      }
    };
  }

  function Register(email, first_name, last_name, password) {
    return async (dispatch) => {
      try {
        const response = await api.register(
          email,
          first_name,
          last_name,
          password
        );

        if (response.status !== 0) return new Error(response.message);

        const { data } = await api.login(email, password);

        const payload = {
          token: data.data.token,
        };

        setSessionData("auth", JSON.stringify(payload));
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        dispatch({
          type: type.LOGIN,
          payload,
        });
      } catch (err) {
        console.error(err);
      }
    };
  }

  function CheckLogin() {
    return async (dispatch) => {
      const data = JSON.parse(getSessionData("auth"));

      if (!data?.token) return;

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      dispatch({
        type: type.LOGIN,
        payload: data,
      });
    };
  }

  function Logout() {
    return async (dispatch) => {
      setSessionData("auth", JSON.stringify({}));
      delete axios.defaults.headers.common["Authorization"];

      dispatch({
        type: type.LOGOUT,
      });
    };
  }

  return {
    Login,
    Register,
    CheckLogin,
    Logout,
  };
})();
