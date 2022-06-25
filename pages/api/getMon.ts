import type { NextApiRequest, NextApiResponse } from 'next'
import { Pokemon, PokemonClient } from 'pokenode-ts';

const getMon = async (
  req: NextApiRequest,
  res: NextApiResponse<Pokemon>
) => {
  const pkmId = Number(req.query.id);
  const api = new PokemonClient();
  const pkm = await api.getPokemonById(pkmId);
  res.send(pkm)
}

export default getMon