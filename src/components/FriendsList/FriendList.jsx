import React from 'react';
import FriendListItem from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import css from "./FriendList.module.css";


const FriendList = ({ friends }) => {
      if (!friends || friends.length === 0) {
    return "";
  }
    return (
        <ul className={css.friendList}>
            {friends.map(friend=> (
              <li className={css.friendListItem} key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
          ))}
        </ul>
    );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;