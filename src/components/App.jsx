import './App'
import Profile from './Profile'
import userData from '../userData.json';
import FriendList from './FriendList';

function App() {

  return (
    <>
          <Profile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
      />
      <FriendList friends={userData.friends} />

            </>
  );
  
}

export default App;
