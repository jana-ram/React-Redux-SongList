
export const selectSong = (song) => {
    return {
        payload : song,
        type : "SONG_SELECT"
    }
};