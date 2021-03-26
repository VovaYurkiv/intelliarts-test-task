import React from 'react'
import './ExpensesList.css'
import Expense from './Expense'

const ExpensesList = ({ ListActive, total, TotalActive, showCurrency, arrayOfObject }) => {

    return (
        <div>
        <p className={TotalActive}>
            Total amount of money spent:&nbsp;{total}&nbsp;{showCurrency}
        </p>
        <div className='expenses-list'>
            <ul>
                <li className={ListActive}>
                    { arrayOfObject.map((expense, index) => {
                        return (
                            <Expense 
                                expense={expense}
                                key={index}
                            />
                        )
                    }) }
                </li>
            </ul>
        </div>
    </div>
    )
}

export default ExpensesList



