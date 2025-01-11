import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"
import ContinuacionNumeros from "./components/UseState/ContinuacionNumeros"
import GuitarHero from "./components/UseState/GuitarHero"
import RegistrarFormulario from './components/UseState/RegistrarFormulario'


const App = () => {
  return (
    <>
    <div className="text-3xl font-bold underline">Hola mundo</div>
      <Contador />
      <hr className="mt-10"/>
      <ContadorDoble />
      <hr className="mt-10"/>
      <ContinuacionNumeros />
      <hr className='mt-10'/>
      <RegistrarFormulario />
      <hr className="mt-10"/>
      <GuitarHero />
    </>
  )
}

export default App