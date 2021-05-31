// creating the reducer
export default(state,action) => {
    switch(action.type) {
        // add to favourites function
        case "ADD_TO_FAVOURITES":
            return {
                // getting the previous data and adding the new one
                ...state,
                favourites: [action.payload, ...state.favourites],
            }

        // remove from favoruites
        case "REMOVE_FAVOURITE":
            return {
                // getting the previous data
                ...state,
                // filtering the item clicked on and removing it from the array
                favourites: state.favourites.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}