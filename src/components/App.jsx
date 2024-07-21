import './App';
import Profile from './Profile/Profile';
import userData from '../data/userData.json';
import FriendList from './FriendsList/FriendList';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Section from './Section/Section';
import Container from './Container/Container';


function App() {
  // console.log('userData:', userData);
  // console.log('friendsData:', friendsData);
  // console.log('transactionsData:', transactionsData);

  return (
    <div>
      <Section title="Profile">
        <Container>
          <Profile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
          /> 
          </Container>
      </Section>
      <Section title="Friends">
        <Container>
          <FriendList friends={friendsData} />
          </Container>
      </Section>
      <Section title="Transactions">
        <Container>
          <TransactionHistory items={transactionsData} />
          </Container>
        </Section>
  </div>
  )
};

export default App;
