import React, {
    createContext,
    useState,
    useEffect,
} from "react"
import { AUTH_KEY, } from "../constants"

export const Context = createContext(null)

const AuthContext = ({ children, }) => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {

    }, [])

    return <Context.Provider value={{
        authenticated,
    }}>
        {children}
    </Context.Provider>
}

export default AuthContext