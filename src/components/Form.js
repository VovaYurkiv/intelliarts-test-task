import React from 'react'
import './Form.css'

const Form = ({ submitHandler, value, setValue, handleChange, inputMin, inputMax }) => {

    return (
        <div className='form'>
            <form 
                onSubmit={submitHandler}
                onChange={handleChange}
            >
                <input
                    className='input-form'
                    type='text'
                    minLength={inputMin}
                    maxLength={inputMax}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Type here...'
                />
            </form>
        </div>
    )
}

export default Form
