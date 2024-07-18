import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const ManageBooks = () => {
  const [allBooks,setallBooks] =useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setallBooks(data));
  },[])

  //delete function
  const handleDelete =(id)=> {
    fetch(`http://localhost:3000/book/${id}`,{
       method:"DELETE",
    }).then(res=>res.json()).then(data => {
      alert("book is deleted successfully")
      setallBooks(allBooks.filter(book => book._id !== id));
      //setallBooks(data);

    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

     {/**table for manage books */}
     


     <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700">
              <th className="px-6 py-8">No.</th>
              <th className="px-12 py-8">Book Name</th>
              <th className="px-12 py-8">Author Name</th>
              <th className="px-12 py-8">Category</th>
              <th className="px-12 py-8">Prices</th>
              <th className="px-12 py-8">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700 dark:bg-gray-800">
            {allBooks.map((book, index) => (
              <tr key={book._id} className="text-gray-700 dark:text-gray-400">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-12 py-3">{book.bookTitle}</td>
                <td className="px-12 py-3">{book.authorName}</td>
                <td className="px-12 py-3">{book.category}</td>
                <td className="px-12 py-3">Rs 400/=</td>
                <td className="px-12 py-3 space-x-2">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="text-blue-600 dark:text-blue-500 hover:underline mr-3"
                  >
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)}className="bg-red-600 px-4 py-1 text-white font-semibold rounded-sm hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


    </div>
  )
}

export default ManageBooks
