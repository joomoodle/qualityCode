import apii from "../services/apii";
export const LOGIN_USER = "LOGIN_USER";
export const GET_EMPLOYE = "GET_EMPLOYE";
export const GET_INCIDENCIAS = "GET_INCIDENCIAS";
export const GET_ERROR = "GET_ERROR";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_POINTS = "GET_POINTS";
export const GET_STEPS = "GET_STEPS";
export const GET_CIRCUITOS = "GET_CIRCUITOS";
export const GET_PERSON_TOUR = "GET_PERSON_TOUR";
export const GET_CONTAINS_TOUR = "GET_CONTAINS_TOUR";

export const getPokemones = () => async dispatch => {
  const response = await apii.getPokemon();
  if (response.ok) {
    const payload = response.data;
    if (payload) {
      //dispatch(setEmploye(payload));
      return payload;
    } else {
      return false;
    }
  } else {
    //const payload = response.data;
    //dispatch(setError(payload.message));
    return false;
  }
};
