import React from 'react'
import ExpenseList from './ExpenseList'

function HomePage() {
  return (
    <div>
      <h1 className='container' >My Budget Planner</h1>
      <div>
        <ExpenseList />
      </div>
    </div>
  )
}

export default HomePage