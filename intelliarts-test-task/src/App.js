import React, { useState, useEffect } from 'react'
import './App.css'
import HelpMenu from './components/HelpMenu'
import Form from './components/Form'
import ExpensesList from './components/ExpensesList'
import axios from 'axios'

const App = () => {

  const [expenses, setExpenses] = useState([])
  const [ListActive, setListActive] = useState('list')
  const [TotalActive, setTotalActive] = useState('total')
  const [value, setValue] = useState('')
  const [total, setTotal] = useState(0)
  const [ratesList, setRatesList] = useState([])
  const [properRates, setProperRates] = useState([])
  const [baseCurrency, setBaseCurrency] = useState('EUR')
  const [date, setDate] = useState('')
  const [inputMax, setInputMax] = useState(100)
  const [inputMin, setInputMin] = useState(4)
  const [titleValue, setTitleValue] = useState(value.split(' ')[4])
  const [showCurrency, setShowCurrency] = useState('')

  const priceArray = expenses.map(el => el = Number(el.price))
  const currencyArray = expenses.map(el => el = el.currency)

  const CUR = ["CAD", "HKD", "ISK", "PHP", "DKK", "HUF", 
               "CZK", "AUD", "RON", "SEK", "IDR", "INR", 
               "BRL", "RUB", "HRK", "JPY", "THB", "CHF", 
               "SGD", "PLN", "BGN", "TRY", "CNY", "NOK", 
               "NZD", "ZAR", "USD", "MXN", "ILS", "GBP", 
               "KRW", "MYR"]

  const addExpense = () => {
    setExpenses(expenses.concat([{
      date: value.split(' ')[1],
      price: value.split(' ')[2],
      currency: value.split(' ')[3],
      title: (titleValue.replace(/"/g, "")),
      id: Date.now(),
    }]))
  }
  // add my expenses

  const saveLocalExpenses = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }
  // save my expenses

  const getLocalExpenses = () => {
    if(localStorage.getItem('expenses') === null) {
      localStorage.setItem('expenses', JSON.stringify([]))
    } else {
      let expenseLocal = JSON.parse(localStorage.getItem('expenses'))
      setExpenses(expenseLocal)
    }
  }
  // get my expenses

  const deleteExpense = () => {
    let filtered = expenses.filter(el => el.date !== date)
    setExpenses(filtered)
  }
  // delete my expense

  const getRates = async () => {
    const res = await axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
    const { rates } = res.data
    const ratesArray = []
    for(const [symbol, rate] of Object.entries(rates)) {
      ratesArray.push({symbol, rate})
      setRatesList(ratesArray)
    }
  }
 // get data from API

  const getMultiplyRates = () => {
    let arrays = []
    for (let i = 0; i < currencyArray.length; i++) { 
      arrays.push(ratesList.filter(el => el.symbol === currencyArray[i]).map(el => el.rate))
      setProperRates([].concat.apply([], arrays))
    }
      setTotal(parseFloat(priceArray.reduce((a, b, i) => {
        return a+b/properRates[i]
      }, 0)).toFixed(2))
  }
  // get rates to find total

  const showList = () => {
    setListActive('list-active')
  }

  const compare = (a, b) => {
    const dateA = a.date.split('-').join()
    const dateB = b.date.split('-').join()

    let comparison = 0
      if (dateA > dateB) {
        comparison = 1
      } else if (dateA < dateB) {
        comparison = -1
      }
      return comparison
    }
  // compare dates to sort 
  
  const newArray = expenses.reduce((acc, dt) => {
    const date = new Date(dt.date)
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const m = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    
    const formatedDate = `${y}-${m}-${d}`
  
    const dateAcc = acc[formatedDate]
    if (!dateAcc) {
      acc[formatedDate] = {
        date: formatedDate,
        title: [dt.title],
        price: [dt.price],
        currency: [dt.currency]
      }
    } else {
      acc[formatedDate].price.push(dt.price)
      acc[formatedDate].title.push(dt.title)
      acc[formatedDate].currency.push(dt.currency)
    }
    return acc
  }, {})
  // create new array with similar date field

  const arrayOfObject = Object.values(newArray)

  const submitHandler = (e) => {
    e.preventDefault()

    if (value.trim()) {
      setValue('')
  }
    if (value.split(' ')[0] === 'add') {
      addExpense(value.slice(3))
      showList()
  }
    if (value.split(' ')[0] === 'list') {
      expenses.sort(compare)
      showList()
  }
    if (value.split(' ')[0] === 'clear') {
      deleteExpense()
  }
    if (value.split(' ')[0] === 'total' && CUR.includes(value.split(' ')[1])) {
      setShowCurrency(baseCurrency)
      getRates()
      getMultiplyRates()
      setTimeout(() => {
        setTotalActive('total-active')
      }, 500)
  }
    if (value.split(' ')[0] === 'total' && value.split(' ')[1] === 'EUR') {
      setShowCurrency('EUR')
      getRates()
      getMultiplyRates()
      setTimeout(() => {
        setTotalActive('total-active')
      }, 500)
  }
    if (currencyArray.includes('EUR') && value.split(' ')[1] === 'EUR') {
      const indexes = currencyArray.flatMap((cur, i) => cur === 'EUR' ? i : [])
      let add = indexes.map(el => priceArray[el])
      let newPriceArray = priceArray.filter((el, index) => {
        return indexes.indexOf(index) === -1
    })
      let result = parseFloat(newPriceArray.reduce((a, b, i) => {
        return a+b/properRates[i]
      }, 0)).toFixed(2)
      setTimeout(() => {
        setTotal(Number(result) + add.reduce((a, b) => a + b))
      }, 300)
  } 
}
// form submitting

  const handleChange = () => {
    setDate(value.split(' ')[1])

    if (value.split(' ')[5] === undefined) {
      setTitleValue(value.split(' ')[4])
  }
    if (value.split(' ')[5] !== undefined) {
      setTitleValue(value.split(' ')[4] + ' ' + value.split(' ')[5])
  }
    if (value.split(' ')[6] !== undefined) {
      setTitleValue(value.split(' ')[4] + ' ' + value.split(' ')[5] + ' ' + value.split(' ')[6])
  }
    if (value.split(' ')[0] === 'add') {
      setInputMax(100)
      setInputMin(22)
  }
    if (value.split(' ')[0] === 'list') {
      setInputMax(4)
      setInputMin(4)
  }
    if (value.split(' ')[0] === 'clea') {
      setInputMax(16)
      setInputMin(4)
  }
    if (value.split(' ')[0] === 't') {
      setTotalActive('total')
  }
    if (value.split(' ')[0] === 'tota') {
      setInputMax(9)
      setInputMin(4)
  }
    if (value.split(' ')[0] === 'total' && CUR.includes(value.split(' ')[1])) {
      setBaseCurrency(value.split(' ')[1])
  }
    if (value.split(' ')[0] === 'total' && value.split(' ')[1] === 'EUR') {
      setBaseCurrency('EUR')
  }
}
// form onChange

  useEffect(() => {
    getLocalExpenses()
  }, [])

  useEffect(() => {
    if(baseCurrency.length === 3) {
      getRates()
    }
  }, [baseCurrency])

  useEffect(() => {
      setTimeout(() => {
        getMultiplyRates()
      }, 200)
  }, [ratesList])

  useEffect(() => {
    saveLocalExpenses()
  }, [expenses])

  useEffect(() => {
    handleChange()
  }, [handleChange])

  return (
    <div>
      <HelpMenu />
      <Form 
        value={value}
        setValue={setValue}
        submitHandler={submitHandler}
        handleChange={handleChange}
        inputMin={inputMin}
        inputMax={inputMax}
      />
      <ExpensesList 
        ListActive={ListActive}
        total={total}
        TotalActive={TotalActive}
        showCurrency={showCurrency}
        arrayOfObject={arrayOfObject}
      />
    </div>
  )
}

export default App


