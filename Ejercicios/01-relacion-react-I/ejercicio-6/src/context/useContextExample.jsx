import { createContext, useState } from "react";


export const ExampleContext = createContext();

export const ExampleProvider = ({children}) => {

    const [inputText, setInputText] = useState("");

    return (
        <ExampleContext.Provider value={{ inputText, setInputText }}>
            {children}
        </ExampleContext.Provider>
    )
}