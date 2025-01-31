import Nieto2 from './Nieto2'

const Hijo2 = (props) => {
    const {counter, setcounter} = props;
    const handleClick = () => {
        setcounter(prevCounter => prevCounter + 1)
    }
    return (
        <> 
        <div> Hola soy tu hijo</div>
        <p> El contador vale {props.counter}</p>
        <button className='bg-blue-600 rounded-lg px-2 py-5 mb-5 mt-6 font-bold text-white' onClick={handleClick}>Aumento el contador desde el hijo</button>
        <Nieto2 counter={counter} handleClick={handleClick} />
        </>   
    )
}

export default Hijo2