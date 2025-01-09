import { useState} from 'react'

const ContadorDoble = () => {
    const [friends, setfriends] = useState({ Juan: 1, Pedro: 1, Maria: 1});
    // añadir promedio de amigos
    const [promedio, setpromedio] = useState(0);

    function handleIncrementOnClick(nombre, numero) {
        setfriends((prevFriends)=> {
            return {
                ...friends,
                [nombre]: prevFriends[nombre] >= 1 ? prevFriends[nombre] + numero : 0
            }
        });
    }

    const calcularPromedio = () =>{
        const numAmigosArray = Object.values(friends);
        const totalAmigos = numAmigosArray.reduce((acc, numAmigo) => {
            acc + numAmigo
        },0);
        setfriends((prevNumAmigosArray)=>{
            
            prevNumAmigosArray.length > 0 ? totalAmigos / prevNumAmigosArray.lenght : 0
        })
    }
    return (
    <>
        <h1 className="text-2xl bg-cyan-500 text-center"> Contador de amigos</h1>
        <div className= "text-center">
            <span className="mb-5">Juan tiene <strong>{friends.Juan}</strong> amigos</span>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" 
            onClick={()=>handleIncrementOnClick("Juan", 1)}>Incrementar Amigos {""}</button>
            <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" 
            onClick={()=>handleIncrementOnClick("Juan", -1)}>Decrementar Amigos {""}</button>
        </div>
        <div className= "text-center">
            <span className="mb-5">Maria tiene <strong>{friends.Maria}</strong> amigos</span>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" 
            onClick={()=>handleIncrementOnClick("Maria", 1)}>Incrementar Amigos {""}</button>
            <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" 
            onClick={()=>handleIncrementOnClick("Maria", -1)}>Incrementar Amigos {""}</button>
        </div>
        <div className= "text-center">
            <h3 className="mb-5">Promedio de amigos <strong>{promedio}</strong> amigos</h3>
        </div>
    </>
)
}

export default ContadorDoble