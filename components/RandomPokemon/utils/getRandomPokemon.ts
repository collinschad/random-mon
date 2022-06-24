import getRandomPokedexId from "./getRandomPokedexId";

const getRandomPokemon = async () => {
  const randomId = getRandomPokedexId();
  const resp = await fetch('/api/hello?id=' + randomId);
  return await resp.json();
}

export default getRandomPokemon