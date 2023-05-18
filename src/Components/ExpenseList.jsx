import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ExpenseChar from './ExpenseChar';

function ExpenseList() {
  const [expenseData, setExpenseData] = useState([]);
  const [expense, setExpense] = useState({
    expenseName : "",
    cost : ""
  })
  const navigate = useNavigate()
  const handleDeleteExpense = (id) => {
    axios.delete(`https://64666a5cba7110b663a046dd.mockapi.io/expenses/${id}`).then(res => console.log(res)).then(() => getExpenses())
  }
  const getExpenses = () => {
    axios.get("https://64666a5cba7110b663a046dd.mockapi.io/expenses").then((res) => setExpenseData(res.data) ).catch(err => console.log(err))
  }
  const editExpense = (id) => {
      navigate(`/edit/${id}`)
  }
  useEffect(() => {
    getExpenses()
  }, [])
  const handleExpenseChange = (event) => {
    const {name, value} = event.target;
    setExpense({
      ...expense,
      [name] : value
     })
  }
  const saveExpenses = () => {
    axios.post("https://64666a5cba7110b663a046dd.mockapi.io/expenses", expense).then(() => getExpenses()).then(() => setExpense({
      expenseName : "",
      cost : ""
    }))
  }
  const budget = 2000;
  const [totalSpent, setTotalSpent] = useState(0)
  useEffect(() => {
      let spend = 0;
      expenseData.forEach((item) => spend += Number(item.cost) )
      setTotalSpent(spend)
  }, [expenseData])
  return (
    <div className='container' >
      <h2>Expense List</h2>
      <div>
        <p>Budget : {budget}</p>
        <p>Total spent : {totalSpent} </p>
        <p>Balance : {budget - totalSpent} </p>
      </div>
      <div>
        <ExpenseChar expenseData = {expenseData} />
      </div>
      {expenseData.map((item) => <div key={item.id} > 
          <div> {item.expenseName} -------- {item.cost} <button onClick={() => handleDeleteExpense(item.id)} >Delete</button> <button onClick = {() => editExpense(item.id)} > Edit</button> </div>
       </div> )}
       <div style={{marginBottom : "100px"}} >
        <h2>Add Expense</h2>
          <input type='text' autoComplete='off' value = {expense.expenseName} name = "expenseName" onChange={handleExpenseChange} placeholder='expense name' />
          <input type='text'  autoComplete='off' value = {expense.cost} onChange={handleExpenseChange} name ="cost" placeholder='cost' />
          <button onClick={saveExpenses} >Save Expense</button>
       </div>
    </div>
  )
}

export default ExpenseList