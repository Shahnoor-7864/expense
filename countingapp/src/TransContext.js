import React, { createContext, useReducer } from 'react';
import TransReducer from './TransReducer';




const initialtransactions =[
 {/**   { amount : 100 , desc: "cash" },
    { amount : -40 , desc: "Book"},
    { amount : 500 , desc: "camera"} */} 
   
]
const TransactionContext = createContext(initialtransactions)


export  default TransactionContext;




export const TransProvider = ({children}) => {
    let [state , dispatch] = useReducer(TransReducer , initialtransactions )

    function addTransaction( transObj ) {
     dispatch ({
         type : "ADD TRANSACTION" , 
         payload : {
             amount : transObj.amount ,
             desc : transObj.desc
         },
     })
    }
    return(
        <TransactionContext.Provider value = {{
            transactions : state,
            addTransaction
        }}>
           {children}
        </TransactionContext.Provider>
    )
}