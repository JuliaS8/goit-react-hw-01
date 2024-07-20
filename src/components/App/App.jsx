import './App';
import './App.css';
import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import FriendList from '../FriendsList/FriendList';
import friendsData from '../../friends.json';
import transactionsData from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';


function App() {
  console.log('userData:', userData);
  console.log('friendsData:', friendsData);
  console.log('transactionsData:', transactionsData);

  return (
  <div>
          <Profile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
  </div>
  )
};

export default App;
