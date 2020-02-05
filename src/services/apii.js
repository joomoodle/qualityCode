import apisauce from "apisauce";

const isDebug = false;
/**
 * Manages the api calls and returns the available endpoints
 * @param {string} baseURL Url to be used for api calls
 */
const create = (
  baseURL = isDebug
    ? "http://localhost/tours_api/api/"
    : "https://pokeapi.co/api/"
) => {
  const api = apisauce.create({
    baseURL,
    timeout: 35000
  });

  // Login
  const getPokemon = () => api.get("v2/pokemon/bulbasaur");
  return {
    getPokemon
  };
};

const apii = create();

export default apii;
