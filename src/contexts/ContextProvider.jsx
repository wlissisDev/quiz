import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({})

export function Provider({children}){
    const [point, setPoint] = useState(0)
    
    return(
        <Context.Provider value={{point,setPoint}}>
            {children}
        </Context.Provider>
    )
}

