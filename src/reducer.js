export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    token: null
};
// primary job of reducer is just to sit there and listen to the action
// reducer takes two things-- state and action, action shows what the data layer looks like
const reducer =(state, action)=>{
console.log(action);

// action has two things-- type and [payload]
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        }
        default:
            return state;
}

}

export default reducer;