export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    // token:  'BQAldi3RAQNGQPuRWNnbuVpQYIr6PmS-wUT3rYU94klSsOLa4YIbm8LL13oH8kw9h4IZv9TVNHeISOT5b6m5AiYXCbx7iLlCPA_R8tnK9dnPN0g3yyf05Abj_HaDHFD40l0eKajsNAVsO6-Br_SjqFnMFxqumFrk80H8qoms74j5tyMqCy9KPi40Q81B9Hn8yn9CU1p4lKZ2ga_V'
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
        case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };

            case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };

    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        }

        case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists,
        }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
}

}

export default reducer;