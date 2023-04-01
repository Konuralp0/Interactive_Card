const cardHolder = document.getElementById("cardholder-input");
const cardOwnerP = document.getElementById("card-owner-name");
const cardNumberP = document.getElementById("card-number");
const cardNumber= document.getElementById("cardnumber-input");
const expDp = document.getElementById("exp");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcP = document.getElementById("cvc-number");
const cvcIn = document.getElementById("cvc-input");
const nameWar = document.getElementById("name-warning");
const numWar = document.getElementById("number-warning");
const dateWar = document.getElementById("date-warning");
const cvcWar = document.getElementById("cvc-warning");

let monthYear = 0;


cardHolder.addEventListener('input',function(){
    const inputValue = cardHolder.value;
    let str = String(inputValue);
    let counter = 0;
    for( let i = 0; i < str.length; i++){
        if(!isNaN(str.charAt(i))){      
            counter++;     
        }
    }
    if(inputValue !== ""){
    cardOwnerP.textContent = inputValue;
    nameWar.textContent = "";
    if(counter > 1){
        nameWar.textContent = "Wrong Format, Letters Only";
        cardHolder.style.borderColor = 'hsl(0, 100%, 66%)';

    }else{
        nameWar.textContent = "";
        cardHolder.style.borderColor = 'rgba(214, 202, 202, 0.7)';

    }
    
    }else{
        cardOwnerP.textContent = "Jane Appleseed";
        nameWar.textContent = "Can't be blank";
        cardHolder.style.borderColor = 'hsl(0, 100%, 66%)';
    }

    


});


cardNumber.addEventListener('input',function(){

    const inputValue = cardNumber.value;
    let str = String(inputValue);
    let counter = 0;
    for( let i = 0; i < str.length; i++){
        if(isNaN(str.charAt(i))){      
            counter++;     
        }
    }
    if(inputValue !== ""){
        cardNumberP.textContent = inputValue;
        numWar.textContent = "";
    if(counter >= 1){
        numWar.textContent = "Wrong Format, Numbers Only";
        cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';

    }else{
        numWar.textContent = "";
        cardNumber.style.borderColor = 'rgba(214, 202, 202, 0.7)';

    }
    
    }else{
        cardNumberP.textContent = "0000 0000 0000 0000";
        
        numWar.textContent = "Can't be blank";
        cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    }
    });

monthInput.addEventListener('input',function(){

    const inputValue = monthInput.value;
    let str = String(inputValue);
    let counter = 0;
    for( let i = 0; i < str.length; i++){
        if(isNaN(str.charAt(i))){      
            counter++;     
        }
    }
    if(inputValue !== ""){
        monthYear = inputValue+"/";
        expDp.textContent = monthYear;
        dateWar.textContent = "";
        if(counter >= 1){
        dateWar.textContent = "Wrong Format, Numbers Only";
        monthInput.style.borderColor = 'hsl(0, 100%, 66%)';

        }else{
        dateWar.textContent = "";
        monthInput.style.borderColor = 'rgba(214, 202, 202, 0.7)';

        }
    }else{
        expDp.textContent = "09/26";
        dateWar.textContent = "Can't be blank";
        monthInput.style.borderColor = 'hsl(0, 100%, 66%)';
    
        }

});

yearInput.addEventListener('input',function(){


    const inputValue = yearInput.value;
    let str = String(inputValue);
    let counter = 0;
    for( let i = 0; i < str.length; i++){
        if(isNaN(str.charAt(i))){      
            counter++;     
        }
    }
    if(inputValue !== ""){
        dateWar.textContent = "";
        expDp.textContent = monthYear + inputValue;
         if(counter >= 1){
        dateWar.textContent = "Wrong Format, Numbers Only";
        yearInput.style.borderColor = 'hsl(0, 100%, 66%)';

        }else{
        dateWar.textContent = "";
        yearInput.style.borderColor = 'rgba(214, 202, 202, 0.7)';

        }
    }else{
        expDp.textContent = monthYear+26;
        dateWar.textContent = "Can't be blank";
        yearInput.style.borderColor = 'hsl(0, 100%, 66%)';
    
        }

})

cvcIn.addEventListener('input',function(){

    const inputValue = cvcIn.value;
    let str = String(inputValue);
    let counter = 0;
    for( let i = 0; i < str.length; i++){
        if(isNaN(str.charAt(i))){      
            counter++;     
        }
    }
    if(inputValue !== ""){
        cvcP.textContent = inputValue;
        cvcWar.textContent = "";
        if(counter >= 1){
        cvcWar.textContent = "Wrong Format, Numbers Only";
        cvcIn.style.borderColor = 'hsl(0, 100%, 66%)';

        }else{
        cvcWar.textContent = "";
        cvcIn.style.borderColor = 'rgba(214, 202, 202, 0.7)';

        }
    }else{
        cvcP.textContent = "123";
      cvcWar.textContent = "Can't be blank";
        cvcIn.style.borderColor = 'hsl(0, 100%, 66%)';
        }


});
