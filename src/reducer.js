export const initialState= {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  playing: false,
  item: null,
  //token: "BQBdRd1tZIWhGrYx8ASLt14DcxqFqYjudTVuSYdAiWOyc8PLv4OMFGwm3yWwJCQGQy9pWzZOUrBOtrkjyjN04_Bwi-lfCY4WzWoKzS4QV86pysoEnRSOLm8lBlFGESq0O4w8uCqeYElsSoCv1dYbgk2qTydLvjwDLF4PrnAjauzMr4cdbTxmH5dQ6TLl_H11In6Cjk6fud-XwyFjVZSjMw",
};

const reducer= (state, action) => {
    console.log(action);
    
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
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
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
};

export default reducer;