import React from 'react';
import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => {
      if (!friends || friends.length === 0) {
    return <p>No friends to display</p>;
  }
    return (
        <ul>
            {friends.map(friend=> (
            <li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    username={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
                ))}
        </ul>
    );
};

export default FriendList;