/** @format */

import api from "../api";

const type = {
  GET_PROFILE: "GET_PROFILE",
};

const defaultState = {};

export function ProfileReducer(state = defaultState, action) {
  switch (action.type) {
    case type.GET_PROFILE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

export const ProfileAction = (() => {
  function getProfile() {
    return async (dispatch) => {
      const response = await api.getProfile();

      dispatch({
        type: type.GET_PROFILE,
        payload: response.data.data,
      });
    };
  }
  return {
    getProfile,
  };
})();
