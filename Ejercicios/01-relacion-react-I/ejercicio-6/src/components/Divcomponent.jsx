import { useContext } from "react"
import { ExampleContext } from "../context/useContextExample"

const Divcomponent = () => {
    const {inputText} = useContext(ExampleContext);
    return (
        <div>
            <h1>{inputText}</h1>
        </div>
    )
}

export default Divcomponent