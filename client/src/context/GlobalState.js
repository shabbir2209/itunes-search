// creating the global state
import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state

const initialState = {
    favourites : [],
};

export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = props => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //actions
    // add to favourites function
    const addToFavourites = item => {
        dispatch({type: "ADD_TO_FAVOURITES", payload: item});
        alert('Added to favourites');
    };

    // removing from the favourites array
    const removeFavourite = item => {
        dispatch({type: "REMOVE_FAVOURITE", payload: item});
        alert('Removed from favourites')
    }

    // returning the global provider
    return (
        <GlobalContext.Provider value={{favourites:state.favourites,addToFavourites,removeFavourite}}>
            {props.children}
        </GlobalContext.Provider>
    )
}