import './App.css'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold mb-3 rounded md bg-gray-300'>Hola gestor de almacenes</h1>
        <div>
          <ProductForm />
        </div>
      </div>
    </>
  )
}

export default App
