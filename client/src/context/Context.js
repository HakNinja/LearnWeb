import { useContext, useState, useEffect, createContext } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(1);
    // const [isGUser, setIsGUser] = useState(false);
    const [user, setUser] = useState('');
    const logIn = (userData, role) => {
        setRole(role);
        setUser(userData);
        // setIsGUser(isGUser);
        localStorage.setItem('role', role);
        // localStorage.setItem('isGUser', isGUser);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    // const logOut = () => {
    //     if(isGUser){
    //         googleLogout();
    //     }
    //     // setIsAuth(false);
    //     setIsGUser(false);
    //     sessionStorage.clear();
    // }
    useEffect(() => {
        const storedrole = localStorage.getItem('role');
        // const storedIsGUser = sessionStorage.getItem('isGUser');
        const userData = JSON.parse(localStorage.getItem('userData'));
        // if (storedIsAuth === 'true') {
            // setIsGUser(storedIsGUser);
            setRole(storedrole);
            setUser(userData);
        // }
    }, [])
    return (
        <AuthContext.Provider value={{ role,setRole, user, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};