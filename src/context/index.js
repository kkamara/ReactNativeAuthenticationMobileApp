import React, { createContext, useState, } from "react"

export const Context = createContext(null)

const AuthContext = ({ children, }) => {
    const [authenticated, setAuthenticated] = useState(false)

    return <Context.Provider value={{
        authenticated,
    }}>
        {children}
    </Context.Provider>
}

export default AuthContext