export const AppReducer = (state, actions) => {
    switch (actions.type) {
        case 'CLEAR_ALL':
            return {
                ...state,
                items:[]
            }
        default:
            return state;
    }

}