import React, { useEffect, useState } from 'react';

// const UseEff = () => {

//   const [expense, setExpense] = useState(() => {
//     const data = localStorage.getItem('expense');
//     if (!data || data === "undefined") return [];
//     return JSON.parse(data);
//   });

//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     localStorage.setItem('expense', JSON.stringify(expense));
//   }, [expense]);

//   const addtask = () => {
//     if (amount === '' || category === '') return;

//     setExpense(prev => {
//       const existing = prev.find(item => item.category === category);

//       if (existing) {
//         // add amount to existing category
//         return prev.map(item =>
//           item.category === category
//             ? { ...item, amount: item.amount + Number(amount) }
//             : item
//         );
//       }

//       // create new category
//       return [
//         ...prev,
//         {
//           id: Date.now(),
//           category: category,
//           amount: Number(amount)
//         }
//       ];
//     });

//     setAmount('');
//     setCategory('');
//   };

//   return (
//     <div>
//       <h3>Expense List</h3>

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value="">Select Expense</option>
//         <option value="Food">Food</option>
//         <option value="Loan">Loan</option>
//         <option value="Rent">Rent</option>
//         <option value="Others">Others</option>
//       </select>

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />

//       <button onClick={addtask}>Submit</button>

//       <ul>
//         {expense.map(item => (
//           <li key={item.id}>
//             <strong>{item.category}</strong> : ₹{item.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UseEff;
// import React, { useState, useEffect } from "react";



const UseEff = () => {
  const categories = ["Food", "Rent", "Medical", "Savings", "Loan", "Other"];

  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    id: Date.now(),
    date: "",
    category: "Food",
    name: "",
    amount: ""
  });

  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses"));
    if (stored) {
      setExpenses(stored);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
let addExpense = (e) => {
    e.preventDefault();
if (!form.date||!form.name||!form.amount) return;
setExpenses([...expenses,{ ...form, amount: Number(form.amount)}]);

setForm({
  id: Date.now(),
      date: "",
      category: "Food",
      name: "",
      amount: ""
    });
  };
  

  
 
  let totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0) 

  let categoryTotals = {};

categories.forEach((categoryy) => {
  let sum = 0;
expenses.forEach((expense) => {
    if (expense.category === categoryy) {
      sum = sum + expense.amount;
    }
  }); 

  categoryTotals[categoryy] = sum;
});
let deleteExpense = (id) => {
  let updatedExpenses = expenses.filter((e) => e.id !== id);
  setExpenses(updatedExpenses);
};
  return (
    <div style={{ padding: "20px" }}>
      <h2>Expense Tracker</h2>

      <form onSubmit={addExpense} style={{ marginBottom: "20px" }}>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input type="text" name="name" placeholder="Expense name" value={form.name} onChange={handleChange}/>
        
        <input type="number"name="amount"placeholder="Amount"value={form.amount} onChange={handleChange}/>

        <button type="submit">Add</button>
      </form>

       <h3>Total Expense: ₹{totalExpense}</h3>
       

      {categories.map((categoryy) => {
        let percent = totalExpense ? Math.round((categoryTotals[categoryy] / totalExpense) * 100): 0;

        return (
          <div  style={{ marginBottom: "10px" }}>
            <h6>{categoryy}: ₹{categoryTotals[categoryy]}</h6>
            <div style={{ background: "beige", height: "10px", borderRadius: "5px" }}>
              <div style={{width: `${percent}%`,background: "green", height: "100%", borderRadius: "5px"}}/>
              </div>
            <p>{percent}%</p>
           
          </div>
        );
      })}
       

      <table style={{border:"1px solid gray" , width:'100%'  }}>
     <thead>
       <tr> 
            <th>Date</th>
            
            <th>Category</th>
            <th>Name</th>
            <th>Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
          {expenses.map((e ) => (
      <tr key={e.id} >
              <td>{e.date}</td>
              <td>{e.category}</td>
              <td>{e.name}</td>
              <td>{e.amount}</td>
              <td>
        <button onClick={() => deleteExpense(e.id)}>
          Delete
        </button>
      </td>
              
      </tr>
      ))}
    </tbody>
<table>
  <td>

  </td>
</table>

      </table>

      
    
    </div>
  );
};

export default UseEff;

