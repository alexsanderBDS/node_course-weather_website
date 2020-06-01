const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=264da4d313d418ff2d96802145dd60aa&lang=pt_br&units=metric`
    request({ url, json: true }, (error, {body}) => {
        
        if(error){
            callback('Unable to connect to location services.', undefined)
        }else if(body.cod === '400'){
            callback(body.message, undefined)
        }else{
            callback(undefined, {
                description: body.current.weather[0].description,
                temperature: body.current.temp,
                feels_like: body.current.feels_like,
                humidity: body.current.humidity
            })
        }
    
    })
}

module.exports = forecast