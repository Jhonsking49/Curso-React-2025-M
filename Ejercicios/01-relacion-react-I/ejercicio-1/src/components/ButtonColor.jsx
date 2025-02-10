import { useState } from "react"

const ButtonColor = () => {

    const [bgcolor, setbgcolor] = useState("bg-sky-400")

    const handlechangeColor = () => {
        setbgcolor(bgcolor === "bg-sky-400" ? "bg-gray-300" : "bg-sky-400")
    }
    return (
        <div className={` ${bgcolor} text-center min-h-screen flex items-center justify-center `}>
            <button onClick={handlechangeColor} className="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                Cambiar color
            </button>
        </div>
    )
}

export default ButtonColor