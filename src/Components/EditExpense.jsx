import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {params, useNavigate, useParams} from 'react-router-dom'

function EditExpense() {
  const params = useParams();
  const {id} = params;
  const [expenseData, setExpenseData] = useState({})
  const navigate  = useNavigate()
  useEffect(()=> {
      axios.get(`https://64666a5cba7110b663a046dd.mockapi.io/expenses/${id}`).then(res =>setExpenseData(res.data))
  },[])
  const handleEditExpense = (event) => {
      const {name,value} = event.target
      setExpenseData({...expenseData, [name] : value})
  }
  const saveExpense = () => {
    axios.put(`https://64666a5cba7110b663a046dd.mockapi.io/expenses/${id}`, expenseData).then(() => navigate("/"))
  }
  return (
    <div> 
      <h2>Edit Expense</h2>
      <input onChange={handleEditExpense} type='text' name = "expenseName" value = {expenseData.expenseName} />
      <input onChange={handleEditExpense} type="text" name = "cost" value = {expenseData.cost} />
      <button onClick={saveExpense} >Save</button>
    </div>
  )
}

export default EditExpense