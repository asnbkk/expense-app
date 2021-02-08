import './App.css';
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from './components';

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='card'>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
