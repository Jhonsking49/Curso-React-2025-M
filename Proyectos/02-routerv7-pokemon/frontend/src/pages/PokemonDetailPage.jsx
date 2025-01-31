import { useLoaderData, useNavigate } from 'react-router-dom'

const PokemonDetailPage = () => {
    const pokemon = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='container mx-auto p-4'>
            <div className='max-w-2xl mx-auto bg-white rounded-md shadow-lg p-6'>
                <button className='mb-4 text-blue-800 hover:underline' onClick={() => navigate(-1)}>
                    Volver
                </button>
                <img 
                src={pokemon.sprites.other.dream_world.front_default} 
                alt={pokemon.name} 
                className='w-32 h-32 mx-auto' 
                />
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                    <h2>Estadisticas</h2>
                        {pokemon.stats.map((stat) => (
                            <div key={stat.stat.name} className='flex justify-between'>
                                <span className='font-semibold capitalize'>
                                    {stat.stat.name} : {stat.base_stat}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className='text-xl text-amber-600 font-semibold mb-2'>Tipos</h2>
                        <div className='flex flex-wrap gap-2'>
                            {pokemon.types.map((type) => (
                                <span key={type.type.name} className='bg-amber-200 text-amber-600 px-2 py-1 rounded-md'>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                    <button className='mt-4 mb-4 text-center bg-amber-500 hover:bg-amber-700 font-bold text-white px-4 py-2 rounded-md'>
                        Añadir a favoritos
                    </button>
            </div>

        </div>
    )
}

export default PokemonDetailPage