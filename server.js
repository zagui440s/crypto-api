const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let currency = {
  'usd':{
    'rate': 53000,
    'floatRate': '3.141592654',
    'Historical': 'Washington DC'
  },
  'eur':{
    'rate': 23487,
    'floatRate': '2.649',
    'Historical': 'Vienna'
  },
  'gbp':{
    'rate': 10003,
    'floatRate': '1.900',
    'Historical': 'London',
    'Taylor': 'London Boy Song'
  },
  'unknown':{
    'rate': 'xx',
    'floatRate': 'wut',
    'Historical': 'wut',
    'Taylor': 'more wut'
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname +'/index.html')
})

app.get('/api/currency/:contsCoin', (request, response) => {
  const countryCoin = request.params.contsCoin.toLowerCase()
  console.log(countryCoin)
  if (currency[countryCoin]){
    response.json(currency[countryCoin])
  }else{
    response.json(currency['unknown'])
  }

})



app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
