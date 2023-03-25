const cardHolder = document.getElementById("cardholder-input");
const cardOwnerP = document.getElementById("card-owner-name");
const cardNumberP = document.getElementById("card-number");
const cardNumber= document.getElementById("cardnumber-input");
const expDp = document.getElementById("exp");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcP = document.getElementById("cvc-number");
const cvcIn = document.getElementById("cvc-input");
let monthYear = 0;


cardHolder.addEventListener('input',function(){
    const inputValue = cardHolder.value;
    if(inputValue !== ""){
    cardOwnerP.textContent = inputValue;
    }else{
        cardOwnerP.textContent = "Jane Appleseed";

    }


});


cardNumber.addEventListener('input',function(){

    const inputValue = cardNumber.value;
    if(inputValue !== ""){
        cardNumberP.textContent = inputValue;
    }else{
        cardNumberP.textContent = "0000 0000 0000 0000";
    
        }




});

monthInput.addEventListener('input',function(){

    const inputValue = monthInput.value;
    if(inputValue !== ""){
        monthYear = inputValue+"/";
        expDp.textContent = monthYear;
    }else{
        expDp.textContent = "09/26";
    
        }

});

yearInput.addEventListener('input',function(){


    const inputValue = yearInput.value;
    if(inputValue !== ""){
        
        expDp.textContent = monthYear + inputValue;
    }else{
        expDp.textContent = monthYear+26;
    
        }

})

cvcIn.addEventListener('input',function(){

    const inputValue = cvcIn.value;
    if(inputValue !== ""){
        cvcP.textContent = inputValue;
    }else{
        cvcP.textContent = "123";
    
        }


})
