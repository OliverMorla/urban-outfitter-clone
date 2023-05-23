import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext()

export function useGlobal() {
    return useContext(GlobalContext)
}

export function GlobalProvider({ children }) {
    const [showLoginModal, setLoginModal] = useState(false)
    const [showCartModal, setCartModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const value = {
        searchValue,
        setSearchValue,
        showLoginModal,
        setLoginModal,
        showCartModal,
        setCartModal
    }

    return (
        <GlobalContext.Provider value={value}>
            { children }
        </GlobalContext.Provider>
    )
}