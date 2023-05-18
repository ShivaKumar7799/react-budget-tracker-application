import './App.css';
import EditExpense from './Components/EditExpense';
import HomePage from './Components/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<HomePage />} />
        <Route path ="/edit/:id" element = {<EditExpense />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
