import TransactionsPage from './TransactionPage';

const App = () => {
  return (
    <div className="flex flex-col items-center min-w-[100vw] bg-[#edf6f6] text-black">
      <h1 className='mx-3 p-2'>MERN Stack Coding Challenge</h1>
      <TransactionsPage />
    </div>
  );
};

export default App;
