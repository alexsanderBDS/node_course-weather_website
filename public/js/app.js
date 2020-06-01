const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = ''
    messageTwo.textContent = 'Loading...'

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }else{
                messageOne.textContent = ''
                messageTwo.textContent = `Location: ${data.location} Forecast: ${data.forecast.description}, temperatura de ${data.forecast.temperature} e sensação de ${data.forecast.feels_like}, humidade é de ${data.forecast.humidity}`
            }
        })
    })
})