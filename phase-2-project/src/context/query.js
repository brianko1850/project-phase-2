import React, { createContext, useState} from "react";

const QueryContext = createContext();


function QueryProvider({ children }) {
    const [ query, setQuery ] = useState("seattle")
   
  
  return <QueryContext.Provider value={{ query, setQuery }}>{children}</QueryContext.Provider>;
}

export { QueryContext, QueryProvider };