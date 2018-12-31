import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ songs }) => {
    if(!songs){
        return (
            <div>
                Select Song
            </div>
        );  
    }
    return (
        <div>
            <h3>Detail For : </h3>
            <p>
                Title : { songs.title }
            </p>
            <p>
                Duration : { songs.duration }
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { songs:state.sleectedSong }
}
export default connect(mapStateToProps)(SongDetail);