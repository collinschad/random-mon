// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PokemonClient } from 'pokenode-ts';

export type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pkmId = Number(req.query.id);
  const api = new PokemonClient();
  const pkm = await api.getPokemonById(pkmId);
  res.status(200).json(pkm)
}