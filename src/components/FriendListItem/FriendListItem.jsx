import React from 'react';
import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <div className={css.friend}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>

    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;