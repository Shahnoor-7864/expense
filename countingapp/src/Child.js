import React, { useContext , useState} from 'react';
import TransactionContext from "./TransContext"

const Child = () => {


    let {transactions , addTransaction} = useContext(TransactionContext);

    let [decs , setDecs] = useState("");

    let [amoun , setAmoun] = useState(0);
   

    const handleAddition = (event) => {
        event.preventDefault();
        console.log(decs , amoun);
        if(Number(amoun) == 0 ){
        alert ( `please enter correct valuea`)
        return false;
        }
        addTransaction({
            amount: Number(amoun),
            desc : decs
        });
        setDecs ('');
        setAmoun(0)
    }

    /*const getIncome = () => {
        let income = 0;
        for (var i = 0 ; i < transactions.lenght ; i++ ){
            if (transactions[i].amount > 0)
            income +=  transactions[i].amount
        }
       return income ;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0 ; i < transactions.lenght ; i++ ){
            if (transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense ;
    }*/

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }


    return (
        <>
        <div className = "container" >
           <h1 className = 'text-center'> Expense Tracker </h1>

           <h3>Your Balance <br/>${getIncome() + getExpense()}  </h3>

           <div className = "expense-container">
             <h3>INCOME <br/> <span>   ${getIncome()}</span> </h3>
             <h3>EXPENSE <br/> <span>${getExpense()}  </span> </h3>
           </div>

           <h3>History</h3>
           <hr />
           <ul className = "transaction-list">
               {transactions.map ((transObj , ind) => {
                   return(
               <li key = {ind}>                 
                  <span> {transObj.desc} </span>
                   <span> {transObj.amount}</span>
               </li>
                   )
               })} 

           </ul>

           <h3>Add new Transaction</h3>
           <hr />

           <form className = "transaction-form " onSubmit= {handleAddition}> 
               <label>
                   Enter Description  <br />
                   <input type = "text"  required placeholder = "Enter your Description"  value = {decs}
                    onChange = {(event) => setDecs(event.target.value)
                   } />
               </label>
               <br /> 
               <label>
                   Enter Amount <br />
                   <input type = "number"  required placeholder = "Enter your Amount" value = {amoun}
                    onChange = {(event) => setAmoun(event.target.value) }  />
               </label>
               <input type= "submit" value = " Add Transaction" style = {{backgroundColor : "purple" , color : "white "}
               } />
           </form>
        </div>
        </>
    )
}
export default Child;