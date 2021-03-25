alert('working')
document.querySelector('button').addEventListener('click', getCurrency)

async function getCurrency(){
  const countryCoin = document.querySelector('input').value
  try{
  const res = await fetch(`http://localhost:8000/api/currency/${countryCoin}`)
  const data = await res.json()

  console.log(data)
  document.querySelector('h2').innerText = data.rate
  document.querySelector('h3').innerText = data.floatRate
  document.querySelector('h4').innerText = data.Historical
}catch(err){
  console.log(err)
}
}
