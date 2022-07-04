import { createContext, useState } from "react";

export const PageTitleContext = createContext()

const PageTitleContextProvider = (props) => {
    const [ pageTitle, setPageTitle ] = useState('Products')

    return ( 
        <PageTitleContext.Provider value={{pageTitle, setPageTitle}}>
            {props.children}
        </PageTitleContext.Provider>
    );
}
 
export default PageTitleContextProvider;