import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy data for best-selling books
  const dummyBooks = [
    { _id: 1, title: "The Silent Patient", author: "Alex Michaelides", publishYear: 2019, createdAt: new Date(), updatedAt: new Date() },
    { _id: 2, title: "Where the Crawdads Sing", author: "Delia Owens", publishYear: 2018, createdAt: new Date(), updatedAt: new Date() },
    { _id: 3, title: "The Midnight Library", author: "Matt Haig", publishYear: 2020, createdAt: new Date(), updatedAt: new Date() },
    { _id: 4, title: "Atomic Habits", author: "James Clear", publishYear: 2018, createdAt: new Date(), updatedAt: new Date() },
    { _id: 5, title: "Educated", author: "Tara Westover", publishYear: 2018, createdAt: new Date(), updatedAt: new Date() },
    { _id: 6, title: "The Alchemist", author: "Paulo Coelho", publishYear: 1988, createdAt: new Date(), updatedAt: new Date() },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBooks(dummyBooks);  // Load the dummy data
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold mb-6 text-center'>Best Seller Books</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {books.map((book) => (
            <div
              key={book._id}
              className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-6 border border-gray-200'
            >
              <h2 className='text-2xl font-semibold mb-2 text-gray-800'>{book.title}</h2>
              <p className='text-gray-600 mb-4'>by <span className='text-indigo-500 font-medium'>{book.author}</span></p>
              <div className='text-gray-700 mb-2'>
                <span className='font-semibold'>Publish Year:</span> {book.publishYear}
              </div>
              <div className='text-gray-700 mb-2'>
                <span className='font-semibold'>Created At:</span> {new Date(book.createdAt).toLocaleDateString()}
              </div>
              <div className='text-gray-700'>
                <span className='font-semibold'>Last Updated:</span> {new Date(book.updatedAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSellerBooks;
