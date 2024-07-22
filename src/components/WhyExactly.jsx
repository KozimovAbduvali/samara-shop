import React, { useState } from 'react'

const product = [
  {
    id: 1,
    name: 'Begzod',
    job: 'Teacher',
    age: '18'
  },
  {
    id: 2,
    name: 'Abduvali',
    job: 'develop',
    age: '18'
  },
  {
    id: 3,
    name: 'Alex',
    job: 'backend',
    age: '18'
  },
]
function WhyExactly() {
  const [User, setUsers] = useState(product)
  return (
    <div className='bg-gray-300 border border-red-500'>
      <h2>User</h2>
      <div>
        {
          User.map((item, index) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <p>{item.job}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WhyExactly
