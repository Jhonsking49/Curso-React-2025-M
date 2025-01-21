import { useState } from 'react'
import GuitarComponent from '../GuitarComponent';

const initialGuitars = [
    {
        nombre: "Fender Stratocaster",
        precio: 1200,
        imagen: "https://example.com/stratocaster.jpg",
        tipo: "Eléctrica"
    },
    {
        nombre: "Gibson Les Paul",
        precio: 2500,
        imagen: "https://example.com/les-paul.jpg",
        tipo: "Eléctrica"
    },
    {
        nombre: "Ibanez RG550",
        precio: 1400,
        imagen: "https://example.com/rg550.jpg",
        tipo: "Eléctrica"
    },
    {
        nombre: "Yamaha C40",
        precio: 150,
        imagen: "https://example.com/c40.jpg",
        tipo: "Clásica"
    },
    {
        nombre: "Martin D-28",
        precio: 3000,
        imagen: "https://example.com/d28.jpg",
        tipo: "Acústica"
    },
    {
        nombre: "Taylor 214ce",
        precio: 1200,
        imagen: "https://example.com/214ce.jpg",
        tipo: "Acústica"
    },
    {
        nombre: "PRS Custom 24",
        precio: 3200,
        imagen: "https://example.com/custom24.jpg",
        tipo: "Eléctrica"
    },
    {
        nombre: "Epiphone SG Standard",
        precio: 400,
        imagen: "https://example.com/sg-standard.jpg",
        tipo: "Eléctrica"
    },
    {
        nombre: "Cordoba GK Studio",
        precio: 850,
        imagen: "https://example.com/gk-studio.jpg",
        tipo: "Clásica"
    },
    {
        nombre: "Gretsch G5420T",
        precio: 900,
        imagen: "https://example.com/g5420t.jpg",
        tipo: "Eléctrica"
    }
];

/**
 * 
 * EJERCICIO: crear un componente para las guitarras y que se pinte en el codigo donde deberían estar las tarjetas
 */

const GuitarHero = () => {

    const [filterGuitars, setfilterGuitars] = useState(initialGuitars);
    const [searchTerm, setsearchTerm] = useState("");
    const [FilterType, setFilterType] = useState("")

    const findGuitars = (search, type) => {
        const dataFiltered = initialGuitars.filter((guitar) => 
            guitar.nombre.toLowerCase().includes(search) &&
            ( guitar.tipo === type || type === "")
        );
        setfilterGuitars(dataFiltered);
    }

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setsearchTerm(value);
        findGuitars(value, FilterType);
    }

    const handleSearchFilterType = (e) => {
        const value = e.target.value;
        setFilterType(value);
        // aqui filtro por tipo de guitarra
        findGuitars(searchTerm, value)
    }

    return (
        <> 
            <div className='max-w-2xl mx-auto bg-gray-200 mt-8 p-6 shadow-lg rounded-md'>
            {/* Titulo */}
                <h1 className='text-2xl font-bold text-center mb-6'>
                    Filtro de guitarras
                </h1>
                <div>
                    <label className='block text-gray-700 font-medium mb-2'>Buscar: </label>
                    <input
                        type='text'
                        placeholder='Buscar guitarra'
                        value={searchTerm}
                        onChange={handleSearch}
                        className='w-full p-2 border border-gray-300 rounded-md'

                    />
                {/* Select  */}
                <div>
                    <label htmlFor='' className='block text-gray-700 font-medium mb-2'>
                        Filtrar por tipo de guitarra
                    </label>
                    <select onChange={handleSearchFilterType}>
                        <option value="">Todos</option>
                        <option value="Eléctrica">Eléctricas</option>
                        <option value="Acústica">Acústicas</option>
                        <option value="Clásica">Clásicas</option>
                    </select>
                </div>
                </div>
                {/* Lista de guitarras */}
                <div>
                    {filterGuitars.map((guitar) => (
                        <GuitarComponent key={guitar.nombre} guitar={guitar} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GuitarHero