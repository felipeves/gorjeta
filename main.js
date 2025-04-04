let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 let buttonSelected = null
 
 function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    calculateResults() 
}


function receiveNumberOfPeopleValue() {
     numberOfPeople = document.querySelector("#people").valueAsNumber
     calculateResults() 
}


function receiveTipPercentageValue(value) {
    tipPercentage = value / 100
    calculateResults() 
    document.querySelector("#custom-tip").value = ""
    

    if(buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
     }

     buttonSelected = document.querySelector(`#button-${value}`)
     buttonSelected.classList.add("button-selected")
}
    
function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    
    calculateResults() 
    
    
RemoveClassButtonSelected()

}

function RemoveClassButtonSelected () {

    if(buttonSelected !== null) {
     buttonSelected.classList.remove("button-selected")
     buttonSelected = null
    }
    }

    function calculateResults(){
        if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
            let amountStrong = document.querySelector(".amount strong")
            let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
 
            amountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`
 
            let totalStrong = document.querySelector(".total strong")
            let totalPerson = (bill / numberOfPeople) + tipAmountPerson
            totalStrong.innerText = `$${totalPerson.toFixed(2)}`
 
       }  else {
            console.log("preencha tudo")
 
       }
 
    }


 
   


  

