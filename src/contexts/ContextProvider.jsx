import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({})

export function Provider({children}){
    const [point, setPoint] = useState(0)
    function addPoint(){
        setPoint(point+1);
    }
    return(
        <Context.Provider value={{point, addPoint}}>
            {children}
        </Context.Provider>
    )
}

