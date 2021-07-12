import React, { createContext, useReducer } from 'react'
import { Items } from '../data/Items'
import { AppReducer } from './AppReducer'

const initialState = {
    items: Items
}


export const GlobalContext = createContext()


function GlobalProvider({children}) {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const clearAll = () => {
        dispatch({
            type:'CLEAR_ALL'
        })
    }
    return (
      <GlobalContext.Provider
        value={{ items: state.items, clearAll }}
      >
        {children}
      </GlobalContext.Provider>
    );
}

export default GlobalProvider;
