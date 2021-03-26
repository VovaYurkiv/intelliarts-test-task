import React from 'react'
import './Expense.css'

const Expense = ({ expense }) => {
    
    if (expense.title.length > 1) {
        let a = expense.title
        let b = expense.price
        let c = expense.currency
        const newArray = a.map((e, i) => e + ' ' + b[i] + ' ' + c[i])
         return (
             <h2 className='expense'>
                 {expense.date}
                 <br/>
                 {newArray.map((el, index) => 
                    <React.Fragment key = {index}>
                        {el}<br/>{''}
                    </React.Fragment>)}
             </h2>
         )
    }

    return (
        <h2 className='expense'>
            {expense.date} 
            <br/>
            {expense.title}            
            &nbsp;
            {expense.price}
            &nbsp;
            {expense.currency} 
        </h2>
    )
}

export default Expense

