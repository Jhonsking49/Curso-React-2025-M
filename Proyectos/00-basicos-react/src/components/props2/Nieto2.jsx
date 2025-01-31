
const Nieto2 = (props) => {
    const {handleCick} = props;
    
    return (
        <> 
        <div> Hola soy tu nieto</div>
        <button className='bg-slate-700 rounded-lg px-2 py-5 mb-5 mt-6 font-bold text-white' onClick={handleCick}>Aumento el contador desde el nieto</button>
        </>    
    )
}

export default Nieto2