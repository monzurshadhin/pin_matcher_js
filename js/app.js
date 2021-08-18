// to generate pin 

function getPin() {
    const pin  = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
function gereratePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

// key pad 
document.getElementById('key-pad').addEventListener('click',function(event){
   const number = event.target.innerText;

   const calcInput = document.getElementById('typed-numbers');

   if(isNaN(number))
   {
      if(number == 'C')
      {
          calcInput.value='';
      } 
      else if(number == '<'){
         ;
        calcInput.value = calcInput.value.slice(0, -1);
      }

   }
   else{
    
    calcInput.value=calcInput.value+number;
   }

});

// verify pin 
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if(pin == typeNumber){
       
        successMessage.style.display='block';

       
        failMessage.style.display='none';
    }
    else{

        successMessage.style.display='none';

       
        failMessage.style.display='block';
    }
}