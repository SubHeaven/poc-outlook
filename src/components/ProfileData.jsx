import React from "react";

export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p><strong>Url: </strong> {props.graphData.joinUrl}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};