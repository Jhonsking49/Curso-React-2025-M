import { useContext } from "react"
import { ExampleContext } from "../context/useContextExample"

const Inputcomponent = () => {
    const { setInputText} = useContext(ExampleContext);
    
    const handlechange = (e) =>{
        setInputText(e.target.value)
    }

    return (
        <div>
            <input placeholder="Añade un texto cualquiero"  onChange={handlechange} />
        </div>
    )
}

export default Inputcomponent