inputs = document.querySelectorAll("input");
submit_btn = document.querySelector("button");

submit_btn.addEventListener("click", function(){
    for (var i=0; i < inputs.length; i++){
        if (invalid_length(inputs[i].id, inputs[i].value.length)){
            message = document.querySelector(message_id(inputs[i].id));
            message.innerHTML = "Invalid value"; 
            message.style.color = "hsl(0, 100%, 66%)";
            inputs[i].style.setProperty('border-color', 'hsl(0, 100%, 66%)');
        }
        if (inputs[i].value == ""){
            message = document.querySelector(message_id(inputs[i].id));
            message.innerHTML = "Can't be blank"; 
            message.style.color = "hsl(0, 100%, 66%)";
            inputs[i].style.setProperty('border-color', 'hsl(0, 100%, 66%)');
        }        
    }    
    
    if (non_number_monitor(document.querySelector("#card-number-input").value)){
        message = document.querySelector(message_id('card-number-input'));
        message.innerHTML = "Wrong format, numbers only";
        message.style.color = "hsl(0, 100%, 66%)";
        document.querySelector("#card-number-input").style.setProperty('border-color', 'hsl(0, 100%, 66%)');
    }   
});

for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", function(e){    
        this.style.setProperty('border-color', 'hsl(270, 3%, 87%)');    
        document.querySelector(message_id(e.target.id)).style.color = "hsl(0, 0%, 100%)" ;                
    });
}

document.querySelector('#card-number-input').addEventListener('input', function(){         
    var val = this.value;
    var newval = '';    
    val = val.replace(/\s/g, '');    
    for(var i = 0; i < val.length; i++) {        
        if(i%4 == 0 && i > 0) newval = newval.concat(' ');        
        newval = newval.concat(val[i]);
    }    
    this.value = newval;

    
});

document.querySelector('#year-expired-input').addEventListener('input', function(e){              
    var val = this.value;
    if (val.length >= 2){
        this.value = val.slice(0,2);
    }    
    message_invalid_value(this.id, e.data, this, this.value); 
});

document.querySelector('#month-expired-input').addEventListener('input', function(e){            
    var val = this.value;
    if (val.length >= 2){
        this.value = val.slice(0,2);
    }     
    message_invalid_value(this.id, e.data, this, this.value);             
});

document.querySelector('#cvc-input').addEventListener('input', function(e){         
    var val = this.value;
    if (val.length >= 3){
        this.value = val.slice(0,3);
    }
    message_invalid_value(this.id, e.data, this, this.value);    
});


function message_id(input_id){
    switch(input_id) {
        case "cardholder-name-input":
            return "#invalid-cardholder-name";            
        case "card-number-input":
            return "#invalid-card-number";            
        case "month-expired-input":
            return "#invalid-month";            
        case "year-expired-input":
            return "#invalid-year";            
        default:
            return "#invalid-cvc";
      }
}

function invalid_character(c){
    if (c == null){
        return false;
    }
    if (c.charCodeAt(0) < 48 || c.charCodeAt(0) > 57){
        return true;
    }
    return false
}

function message_invalid_value(id, data, element, value = ''){
    if (id == 'month-expired-input'){
        if ((value > 12) || (value.length == 2 && value == 0) || invalid_character(data)){
            message = document.querySelector(message_id(id))
            message.innerHTML = "Invalid value";
            message.style.color = "hsl(0, 100%, 66%)";
            element.value = value.slice(0, -1);
        }
    }
    else{
        if (invalid_character(data)){
            message = document.querySelector(message_id(id))
            message.innerHTML = "Invalid value";
            message.style.color = "hsl(0, 100%, 66%)";
            element.value = value.slice(0, -1);
        }
    }    
}

function non_number_monitor(card_number){
    var n = card_number.length;

    for (var i = 0; i < n; i++){
        char_code = card_number.charCodeAt(i);
        if (char_code != 32){
            if (char_code < 48 || char_code > 57){
                return true;
            }
        }
    }

    return false;
}

function invalid_length(id, length){
    if (length == 0){
        return false;
    }
    switch(id) {
        case "cvc-input":
            return length < 3;            
        case "card-number-input":
            return length < 19;                                
        default:
            return length < 2;
      }
}



