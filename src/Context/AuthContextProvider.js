import React, {useState} from "react";
import AuthContext from ".";

const AuthContextProvider = ({children}) => {
const[isLoggedIn, setIsLoggedIn] = useState(false); 

const  context = {
    isLoggedIn, 
    setIsLoggedIn
};

return(
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
);
}

export default AuthContextProvider;