import { createContext, useState } from "react";


export const Context = createContext()



export const UserInform = ({ children }) => {
    
    const [users, setUser] = useState([])

    function addUser(user) {
        setUser([...users, user])
    }

    return (
        <Context.Provider value={{ addUser, users, setUser }}>
            {children}
        </Context.Provider>
    )
}