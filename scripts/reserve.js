
 // form validation


function validateReserveForm(){
    let ResName = document.forms.reserveTable.reserveName.value;
    let ResEmail = document.forms.reserveTable.reserveEmail.value;
    let ResMobile = document.forms.reserveTable.reserveNo.value;
    let ResGuess = document.forms.reserveTable.guessNo.value;
    let ResTime = document.forms.reserveTable.time.value;
    let ResDate = document.forms.reserveTable.date.value;
    let ResMsg = document.forms.reserveTable.message.value;

    
        if(!ResName){
            document.getElementById('resNameErr').innerHTML= "Please Enter your Name";
            document.getElementById('reserveName').focus();
           return false
        }
        else{
            document.getElementById('resNameErr').innerHTML= "";
        }
        
    
        if(!ResEmail){
            document.getElementById('resEmailErr').innerHTML= "Please Enter your email";
            document.getElementById('reserveEmail').focus();
            return false
        }
        else{
            document.getElementById('resEmailErr').innerHTML= "";
        }

        if(!ResMobile){
            document.getElementById('resMobileErr').innerHTML= "Please Enter your mobile no";
            document.getElementById('reserveNo').focus();
            return false
        }
        else{
            document.getElementById('resMobileErr').innerHTML= "";
        }

        if(!ResGuess){
            document.getElementById('resGuessErr').innerHTML= "Please Enter your mobile no";
            document.getElementById('guessNo').focus();
            return false
        }
        else{
            document.getElementById('resGuessErr').innerHTML= "";
        }

        if(!ResMobile){
            document.getElementById('resMobileErr').innerHTML= "Please Enter your mobile no";
            document.getElementById('reserveNo').focus();
            return false
        }
        else{
            document.getElementById('resMobileErr').innerHTML= "";
        }

        if(!ResDate){
            document.getElementById('resDateErr').innerHTML= "Please Enter reservation date";
            document.getElementById('date').focus();
            return false
        }
        else{
            document.getElementById('resDateErr').innerHTML= "";
        }

        if(!time){
            document.getElementById('resTimeErr').innerHTML= "Please Enter reservation period";
            document.getElementById('time').focus();
            return false
        }
        else{
            document.getElementById('resTimeErr').innerHTML= "";
        }

        if(!ResMsg){
            document.getElementById('resMsgErr').innerHTML= "Please Enter reservation period";
            document.getElementById('message').focus();
            return false
        }
        else{
            document.getElementById('resMsgErr').innerHTML= "";
        }
    
    return true
}

function validateName(){
    let namePattern = /^[A-Za-z/s]*$/;
    let resName = document.forms.reserveTable.reserveName.value;

    if(resName){
        let y = namePattern.test(resName);
        if(y==false){
            document.getElementById('resNameErr').innerHTML= "Please Enter a valid name of alphabet and space";
            document.getElementById('reserveName').focus();
        }
        else{
            document.getElementById('resNameErr').style.borderColor ='green';
        }
    }
}

function validateEmail(){
    let emailPattern = /^\S+@\S+\.\S+$/;
    let ResEmail = document.forms.reserveTable.reserveEmail.value;

    if(ResEmail){
        let y = emailPattern.test(ResEmail);
        if(y==false){
            document.getElementById('resEmailErr').innerHTML= "Please Enter a valid email address";
            document.getElementById('reserveEmail').focus();
        }
        else{
            document.getElementById('resEmailErr').style.borderColor ='green';
        }
    }
}
