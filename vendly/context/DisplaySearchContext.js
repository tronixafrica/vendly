import { createContext, useState } from "react";


export const DisplaySearchContext = createContext()

const DisplaySearchContextProvider = (props) => {
    const [displaySearch, setDisplaySearchInput] = useState(false)
    return ( 
        <DisplaySearchContext.Provider value={{displaySearch, setDisplaySearchInput}}>
            {props.children}
        </DisplaySearchContext.Provider>
    );
}
 
export default DisplaySearchContextProvider;