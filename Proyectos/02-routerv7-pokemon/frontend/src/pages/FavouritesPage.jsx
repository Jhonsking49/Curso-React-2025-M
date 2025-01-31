import { usePokemon } from '../context/PokeContext';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/path';

const FavoritesPage = () => {
  const { pokeFav, removeFromFav  } = usePokemon();

  if(pokeFav.length === 0) {
    return <div className='text-center mt-8'>
    <h1 className='text-3xl font-bold mb-4'>
      Favoritos
    </h1>
    <p>
    No tienes pokemons favoritos
    </p>
    <Link to={ROUTES.HOME} className='text-blue-800 hover:underline block mt-4'>
      Volver a la pagina de inicio
    </Link>
    </div>
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Tus Pokemons Favoritos</h1>
      {/* Grid de las tarjetas */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pokeFav.map((pokemon) => (
          <div key={pokemon.id} className='bg-amber-100 rounded-lg p-4 shadow-amber-200 shadow-lg'>
            <img 
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className='w-32 h-32 mx-auto'/>
            <h2 className='text-xl font-semibold text-center capitalize mt-2'>
              {pokemon.name}
            </h2>
            <div className='mt-4 space-y-2'>
              <Link to={`${ROUTES.SEARCH}/${pokemon.name}`} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800'>
                Ver detalles
              </Link>
              <button 
              className='w-full text-center bg-red-500 text-whitepx-4 py-2 rounded hover:bg-red-800' 
              onClick={()=> removeFromFav(pokemon.id)}>
                Eliminar favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage