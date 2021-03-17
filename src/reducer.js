export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
    RESET_USER: "RESET_USER",
};

const reducer = (state , action ) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };
        case actionTypes.RESET_USER:
            return{
                ...state,
                user: null,
            };

        default:
            return state;
    }
};

export default reducer;