//Listen for Submit
document.getElementById('loan-form').addEventListener('submit',calculateResults)

//Calculate Results
function calculateResults(e){
    

    e.preventDefault()
}

//UI Variables 

const amount = document.getElementById('amount')
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')

