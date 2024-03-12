import { useContext, useState, useEffect, createContext } from 'react';
import { googleLogout } from '@react-oauth/google';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(1);
    const [isGUser, setIsGUser] = useState(false);
    const [user, setUser] = useState('');
    const logIn = (userData, isGUser, role) => {
        setRole(role);
        setUser(userData);
        setIsGUser(isGUser);
        localStorage.setItem('role', role);
        localStorage.setItem('isGUser', isGUser);
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    const logOut = () => {
        if(isGUser){
            googleLogout();
        }
        // setIsAuth(false);
        setIsGUser(false);
        sessionStorage.clear();
    }
    useEffect(() => {
        const storedIsAuth = sessionStorage.getItem('isAuth');
        const storedIsGUser = sessionStorage.getItem('isGUser');
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        if (storedIsAuth === 'true') {
            setIsGUser(storedIsGUser);
            // setIsAuth(true);
            setUser(userData);
        }
    }, [])
    return (
        <AuthContext.Provider value={{ role, isGUser, user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};