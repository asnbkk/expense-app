import './App.css';
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from './components';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='card'>
          <GlobalProvider>
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </GlobalProvider>
        </div>
      </div>
    </>
  );
}

export default App;
