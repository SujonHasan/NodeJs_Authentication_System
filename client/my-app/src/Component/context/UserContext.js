import { createContext, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loadding, setLoadding] = useState(true);

    // if(user) setLoadding(false);

    const userInfo = {user, setUser, loadding, setLoadding};

    return <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
}

export default UserContext;