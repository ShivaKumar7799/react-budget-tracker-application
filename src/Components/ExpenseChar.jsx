import React from 'react'
import {CChart} from '@coreui/react-chartjs'
function ExpenseChar({expenseData}) {
  return (
    <div>
      <CChart
        style = {{width : "500px"}}
        type="bar"
        data={{
          labels: expenseData.map((data) => data.expenseName ),
          datasets: [
            {
              label: 'ExpenseTracker',
              backgroundColor: '#f87979',
              data: expenseData.map((data) => data.cost )
            },
          ],
        }}
        labels="months"
      />
    </div>
  )
}

export default ExpenseChar