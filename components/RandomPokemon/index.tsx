import { useQuery } from 'react-query'
import type { Pokemon } from 'pokenode-ts'
import getRandomPokemon from './utils/getRandomPokemon'

const RandomPokemon = () => {
  const query = useQuery<Pokemon>('test', getRandomPokemon);
  if (query.isLoading)  {
    return (
      <div className='h-screen w-screen flex flex-col'>
        <div className='p-10'/>
        <div className='text-5xl text-center'>
          Loading...
        </div>
      </div>
    )
  }
  return (
    <div className='h-screen w-screen flex flex-col'>
      <div className='p-10'/>
      <div className='text-5xl text-center'>
        Random Pokémon:
      </div>
      <div className='p-4'/>
      <div className='border w-1/4 self-center'>
        <img src={query.data?.sprites.front_default!} className='w-full -mt-4'/>
      </div>
    </div>
  )
}


export default RandomPokemon