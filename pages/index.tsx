import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import PokemonDetails from '../components/PokemonDetails'
import getRandomPokedexNumber from '../utils/getRandomPokedexId';

const Home = () => {
  const [currentPokedexNumber, setCurrentPokedexNumber] = useState(getRandomPokedexNumber());

  return (
    <div className='h-screen w-screen flex flex-col'>
      <div className='p-10'/>
      <QueryClientProvider client={queryClient}>
        <PokemonDetails pokedexNumber={currentPokedexNumber}/>
      </QueryClientProvider>
      <div className='p-4'/>
      <button className="bg-red-200 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full inline-block self-center" onClick={() => handleRerollClick(setCurrentPokedexNumber)}>
         <div className='text-center'>
            Reroll Pokémon
         </div>
      </button>
    </div>
  );
}

const handleRerollClick = (setCurrentId: Function) => {
  setCurrentId(getRandomPokedexNumber());
}


export default Home
