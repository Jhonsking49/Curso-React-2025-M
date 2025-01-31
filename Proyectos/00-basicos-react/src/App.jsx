import Hijo2 from "./components/props2/Hijo2"
import Nieto2 from "./components/props2/Nieto2"
import Padre2 from "./components/props2/Padre2"
import Timer from "./components/UseEffect/Timer"
import CardPlaceHolder from "./components/UseEffect/CardPlaceHolder"
import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
import GuitarHero from "./components/UseState/GuitarHero"
import Padre from "./components/UseState/props/Padre"
import RegistrarFormulario from './components/UseState/RegistrarFormulario'


const App = () => {
  return (
    <>
    <div className="text-3xl font-bold underline">Hola mundo</div>
    {/*
      <Contador />
      <hr className="mt-10"/>
      <ContadorDoble />
      <hr className="mt-10"/>
      <ContinuacionNumeros />
      <hr className='mt-10'/>
      <RegistrarFormulario />
      <hr className="mt-10"/>
      <GuitarHero />
      <hr className="mt-10"/>
      <Padre />
      <Padre2>
        <Hijo2>
          <Nieto2 />
        </Hijo2>
      </Padre2>
      */}
      <Timer />
      <CardPlaceHolder />
    </>
  )
}

export default App