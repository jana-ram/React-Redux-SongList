import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {
            title : 'Love with shape of you',
            duration : '03:15'
        },
        {
            title : 'We dont talk any more',
            duration : '04:15'
        }
    ]
}

const selectSong = (selectedSong = null , action) => {
    if(action.type === "SONG_SELECT"){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({    
    songs : songsReducer,
    sleectedSong : selectSong
});