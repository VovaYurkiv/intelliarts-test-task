let queueArray = []
const localQueue = localStorage.getItem('queue')
if (localQueue === null || localQueue === "") {
   queueArray = []
} else {
   queueArray.push(localQueue)
   queueArray = queueArray.join('').split(',')
}

window.onload = createQueue = () => {
   let liElement = document.getElementById('elementsList')
   listItems = queueArray.reduce((res, el) => 
      res += `<li id='elementLi'>${el}</li>`, '')
      liElement.innerHTML = listItems
}

const handleSubmit = () => {
   window.event.preventDefault()
   document.getElementById('myForm').reset()
   createQueue()
}

const scrollToTop = () => {
   let liScroll = document.getElementById('elementLi')
   if (liScroll !== null) {
      document.getElementById('elementLi').scrollIntoView()
   }
}

const scrollToBottom = () => {
   let ulScroll = document.getElementById('elementsList')
   ulScroll.scrollTop = ulScroll.scrollHeight
}

const addQueueElement = () => {
   let input = document.getElementById('inputField')
   if (input.value.length > 0 && queueArray.length < 22 && input.value[0] !== ' ') {
      queueArray.push(input.value.trim())
      localStorage.setItem('queue', queueArray)
      setTimeout(() => {
         scrollToBottom()
      }, 100)
   } 
   else if (input.value === '') {
      alert('Input cannot be empty!')
   }
   else if (queueArray.length === 22) {
      alert('You have exceeded the limit of elements(22)')
   }
}

const deleteQueueElement = () => {
   queueArray.shift()
   localStorage.setItem('queue', queueArray)
   scrollToTop()
}




