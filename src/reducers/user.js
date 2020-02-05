import {
  LOGIN_USER,
  GET_EMPLOYE,
  GET_INCIDENCIAS,
  GET_ERROR,
  GET_COMMENTS,
  GET_POINTS,
  GET_STEPS,
  GET_CIRCUITOS,
  GET_PERSON_TOUR,
  GET_CONTAINS_TOUR
} from "../actions/user";

const initialState = {
  idusers: null,
  userName: "",
  modules: [],
  employe: [],
  incidencias: [],
  error: null,
  comments: [],
  points: [],
  steps: [],
  circuitos: [],
  person: [],
  cointainsTour: []
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      const user_data = action.user;
      const { modules } = user_data;
      const stateLog = {
        ...state,
        idusers: user_data.idusers,
        userName: user_data.userName,
        modules: modules,
        error: null
      };
      return stateLog;
    case GET_EMPLOYE:
      const employe = action.employe;
      return {
        ...state,
        employe: employe,
        error: null
      };
    case GET_INCIDENCIAS:
      return {
        ...state,
        incidencias: action.incidencias,
        error: null
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case GET_COMMENTS:
      return {
        ...state,
        error: null,
        comments: action.comments
      };
    case GET_POINTS:
      return {
        ...state,
        error: null,
        points: action.points
      };
    case GET_STEPS:
      return {
        ...state,
        error: null,
        steps: action.steps
      };
    case GET_CIRCUITOS:
      return {
        ...state,
        error: null,
        circuitos: action.circuitos
      };
    case GET_PERSON_TOUR:
      return {
        ...state,
        error: null,
        person: action.person
      };
    case GET_CONTAINS_TOUR:
      return {
        ...state,
        error: null,
        cointainsTour: action.cointainsTour
      };
    default:
      return state;
  }
}
