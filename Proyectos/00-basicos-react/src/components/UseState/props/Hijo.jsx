import Nieto from './Nieto'

const Hijo = (props) => {
    const {counter, setcounter} = props;
    const handleClick = () => {
        setcounter(prevCounter => prevCounter + 1)
    }
    return (
        <> 
        <div> Hola soy tu hijo</div>
        <p> El contador vale {props.counter}</p>
        <button className='bg-blue-600 rounded-lg px-2 py-5 mb-5 mt-6 font-bold text-white' onClick={handleClick}>Aumento el contador desde el hijo</button>
        <Nieto counter={counter} setcounter={setcounter} handleClick={handleClick} />
        </>   
    )
}

export default Hijo