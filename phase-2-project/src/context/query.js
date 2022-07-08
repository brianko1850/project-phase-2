import React, {useContext} from "react";

const QueryContext = React.createContext();

// create a provider component
function QueryProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <QueryContext.Provider value={`seattle`}>{children}</QueryContext.Provider>;
}

export { QueryContext, QueryProvider };