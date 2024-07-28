const TransactionsTable = ({ transactions, handlePrevPage, handleNextPage, page, totalPages, noResultsFound }) => {
  return (
    <>
      <div className='mx-5 my-2'>
        <table className='my-1 mx-auto table-auto bg-[#f8df8c] rounded-lg min-w-[75vw] max-w-[85vw]'>
          <thead className=''>
            <tr>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>ID</th>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>Title</th>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>Description</th>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>Price</th>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>Category</th>
              <th className='border-b-4 border-r-4 border-black px-2 py-1'>Sold</th>
              <th className='border-b-4 border-black px-2 py-1'>Image</th>
            </tr>
          </thead>
          <tbody>
            {noResultsFound ? <tr><td colSpan={7} className='rounded-lg px-2 text-center h-[300px]'>No items found try different keyword</td></tr> : transactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td className={`border-r-4 border-black px-4 text-center ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>{transaction.id}</td>
                <td className={`border-r-4 border-black px-4 py-1 text-center ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>{transaction.title}</td>
                <td className={`border-r-4 border-black py-2 ${index === transactions.length - 1 ? '' : 'border-b-4'} overflow-scroll max-h-32`}>{transaction.description}</td>
                <td className={`border-r-4 border-black px-4 text-center ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>{transaction.price}</td>
                <td className={`border-r-4 border-black px-4 text-center ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>{transaction.category}</td>
                <td className={`border-r-4 border-black text-center font-bold px-4 ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>{transaction.sold ? <p className="text-red-500">Sold</p> : <p className="text-green-600">Avalaible</p>}</td>
                <td className={` border-black ${index === transactions.length - 1 ? '' : 'border-b-4'}`}>
                  <div className="flex justify-center">
                    <img className='rounded-lg max-w-[8vw] max-h-[20vh]' src={transaction.image} alt={transaction.image} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center mx-3 my-4 font-semibold'>
          <span className="cursor-default">Page No: {page}</span>
          <div>
            <button className={`mx-3 ${(page === 1) ? "opacity-60 cursor-default" : "opacity-100 cursor-pointer"}`} onClick={handlePrevPage} disabled={page === 1} >Previous</button>-
            <button className={`mx-3 ${(totalPages === 1) ? "opacity-60 cursor-default" : "opacity-100 cursor-pointer"}`} onClick={handleNextPage} disabled={totalPages === 1} >Next</button>
          </div>
          <span className="cursor-default">Per Page: 10</span>
        </div>
      </div>
    </>
  );
};

export default TransactionsTable;
