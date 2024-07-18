import React from 'react';

const Profile = ({ username, tag, location, avatar, status, followers, views, likes }) => {
  return (
    <div className="profile">
      <div>
    <img src={avatar} alt={"username"} width="100"/>
      <p>{username}</p>
      <p>@{tag}</p>
        <p>{location}</p>
        </div>
        {/* <ul>
          <li>
            <span>Followers</span>
            <span>{status.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{status.views}</span>
          </li>
          <li><span>Likes</span>
            <span>{status.likes}</span>
          </li>
        </ul> */}
    </div>
  )
}

export default Profile;