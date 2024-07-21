import './App';
import Profile from './Profile/Profile';
import userData from '../data/userData.json';
import FriendList from './FriendsList/FriendList';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Section from './Section/Section';


function App() {
  // console.log('userData:', userData);
  // console.log('friendsData:', friendsData);
  // console.log('transactionsData:', transactionsData);

  return (
    <div>
      <Section title="Profile">
          <Profile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        /> 
      </Section>
      <Section title="Friends">
        <FriendList friends={friendsData} />
      </Section>
      <Section title="Transactions">
        <TransactionHistory items={transactionsData} />
        </Section>
  </div>
  )
};

export default App;
