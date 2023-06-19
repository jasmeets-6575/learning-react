const { createContext, useState, useContext } = require("react");

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
  const [name,setName] = useState("peter")
  return <GlobalContext.Provider value={{name,setName}}>
    {children}
  </GlobalContext.Provider>
}

export default AppContext