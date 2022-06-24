import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import RandomPokemon from '../components/RandomPokemon'

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RandomPokemon />
    </QueryClientProvider>
  );
}


export default Home
