import React, { useState } from 'react'

function Recommendation() {
  const [user, setUser] = useState('Ali');
  const [son, setSon] = useState(0);
  return (
    <div className='w-max mx-auto bg-white text-black p-10 rounded shadow-md my-5'>
      <h1 className='text-3xl font-bold mb-4'>Hisoblagich</h1>
      <div className='flex items-center mb-4'>
        <button
          onClick={() => setSon(son + 1)}
          className='bg-red-500 text-white rounded px-4 py-2 m-2'
        >
          +
        </button>
        <h1 className='bg-pink-300 text-black rounded px-6 py-2 m-2 text-2xl'>
          {son}
        </h1>
        <button
          onClick={() => setSon(son - 1)}
          className='bg-red-500 text-white rounded px-4 py-2 m-2'
        >
          -
        </button>
      </div>
      <button
        onClick={() => setSon(0)}
        className='bg-red-500 text-white rounded px-4 py-2'
      >
        Reset
      </button>
    </div>
  )
}

export default Recommendation
