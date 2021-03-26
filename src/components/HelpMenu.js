import React from 'react'
import './HelpMenu.css'

const HelpMenu = () => {
    return (
            <p className='help-menu'>
                1.To add an expense type: <br/>
                add(key word) date(yyyy-mm-dd) price currency title <br/>
                Example: <br/>
                add 2017-04-25 2 USD Jogurt <br/>
                2.To display a list of your expenses type: <br/>
                list <br/>
                3.To clear an expense by date type: <br/>
                clear date(yyyy-mm-dd) <br/>
                Example: <br/>
                clear 2017-04-27 <br/>
                4.To display the total amount of money spent type: <br/>
                total currency <br/>
                Example: <br/>
                total PLN <br/>
            </p> 
    )
}

export default HelpMenu
