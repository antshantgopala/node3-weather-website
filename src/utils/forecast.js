const request = require('request')

const forecast = (lang, lati, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=702c8a0f1ab35d7471bc1c21f93679d3&query=' + encodeURIComponent(lang) +','+ encodeURIComponent(lati) + '&units=m'
    request({ url, json: true }, (error, { body }) =>{
        if(error) {
            callback('Unable to connect to internet', undefined)
        } else if(body.error) {
            callback('Unable to find location for given geocode', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+body.current.temperature+' degrees out and it feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast