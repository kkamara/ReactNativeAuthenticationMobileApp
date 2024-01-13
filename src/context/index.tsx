import React, { createContext, } from "react"
import type { PropsWithChildren, } from "react"

export const Context = createContext(null)

const AuthContext = ({ children, }: PropsWithChildren): React.JSX.Element => {
    return <Context.Provider value={null}>
        {children}
    </Context.Provider>
}

export default AuthContext