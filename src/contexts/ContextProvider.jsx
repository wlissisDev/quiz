import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({})

export function Provider({ children }) {
    const [point, setPoint] = useState(0);

    const ULR = import.meta.env.VITE_REACT_URL;
    function api(category) {
        fetch(`${ULR}&limit=10&tags=${category}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
            });
    }

    return (
        <Context.Provider value={{ point, setPoint, api }}>
            {children}
        </Context.Provider>
    )
}

