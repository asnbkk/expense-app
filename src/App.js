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
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </>
  );
}

export default App;
