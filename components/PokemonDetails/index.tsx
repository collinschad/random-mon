import { useQuery } from 'react-query'
import { Pokemon, PokemonClient } from 'pokenode-ts'
import { useEffect, useState } from 'react';

interface Properties {
   pokedexNumber: number
}

const PokemonDetails = (props: Properties) => {
  const [currentPkm, setCurrentPkm] = useState<Pokemon>()

  useEffect(() => {
    getPokemonById(props.pokedexNumber).then(pkmData => setCurrentPkm(pkmData))
  }, [props.pokedexNumber])

  return (
   <div className='w-full flex flex-col'>
      <div className='text-5xl text-center text-red-200'>
        Pokémon Chosen:
      </div>
      <div className='p-4'/>
      <div className='border w-60 self-center inline-block'>
        <img src={currentPkm?.sprites.front_default!} className='w-full'/>
      </div>
      <div className='text-center text-3xl'>
        {nameToUpper(currentPkm!)}
      </div>
   </div>
  )
}

const getPokemonById = async (id: number) => {
  const resp = await fetch('/api/getMon?id=' + id);
  return await resp.json();
}

const nameToUpper = (pkm: Pokemon) => {
  return pkm?.name.charAt(0).toUpperCase() + pkm?.name.slice(1);
}

export default PokemonDetails