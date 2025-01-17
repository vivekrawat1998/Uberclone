import React, {createContext} from 'react'
import { useState } from 'react'

export const UserdataContext =   createContext()

const UserContext = ({children}) => {
 const [user, setuser] = useState({
    email: "",
     fullName: {
        firstName: "",
        lastName: ""
     }
 })

  return (
    <UserdataContext.Provider value={{user, setuser}}>{children}</UserdataContext.Provider>
  )
}

export default UserContext