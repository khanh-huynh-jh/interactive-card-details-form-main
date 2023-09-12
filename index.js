for (let i = 0; i < input_elements_array.length; i++) {
    input_elements_array[i].addEventListener("input", function (e) {
        this.style.setProperty('border-color', 'hsl(270, 3%, 87%)');
        document.querySelector(MESSAGE_ID[e.target.id]).style.color = "hsl(0, 0%, 100%)";
        document.querySelector(INTERACTIVE_DISPLAY[this.id]).innerText = this.value.toUpperCase();
    });
}

card_number_input.addEventListener('input', function () {
    let val = this.value;
    let newval = '';
    val = val.replace(/\s/g, '');
    for (let i = 0; i < val.length; i++) {
        if (i % 4 == 0 && i > 0) newval = newval.concat(' ');
        newval = newval.concat(val[i]);
    }
    this.value = newval;
});

[[year_expired_input, 2], [month_expired_input, 2], [cvc_input, 3]].forEach(([element, max_length]) => {
    element.addEventListener('input', (e) => {
        const target = e.target;
        let val = target.value;
        if (val.length >= max_length) {
            target.value = val.slice(0, max_length);
        }
        message_invalid_value(target.id, e.data, target, target.value);
    })
})

for (let i = 0; i < input_elements_array.length; i++) {
    input_elements_array[i].addEventListener("input", function (e) {
        document.querySelector(INTERACTIVE_DISPLAY[this.id]).innerText = this.value.toUpperCase();
    });
}

submit_btn.addEventListener("click", function () {
    let answer_is_valid = true;

    for (let i = 0; i < input_elements_array.length; i++) {
        if (validate_length(input_elements_array[i].id, input_elements_array[i].value.length)) {
            display_error(input_elements_array[i].id, "Invalid value");
            input_elements_array[i].style.setProperty('border-color', 'hsl(0, 100%, 66%)');
            answer_is_valid = false;
        }
        if (input_elements_array[i].value == "") {
            display_error(input_elements_array[i].id, "Can't be blank");
            input_elements_array[i].style.setProperty('border-color', 'hsl(0, 100%, 66%)');
            answer_is_valid = false;
        }
    }

    if (contain_non_number(document.querySelector(`#${CARD_NUMBER_INPUT_ID}`).value)) {
        display_error('card-number-input', "Wrong format, numbers only");
        card_number_input.style.setProperty('border-color', 'hsl(0, 100%, 66%)');
        answer_is_valid = false;
    }

    if (answer_is_valid) {
        document.querySelector(".form-section").innerHTML = document.querySelector(".success").innerHTML;
    }
});

body.addEventListener('click', display_default_value);

window.addEventListener('load', resize_content);

window.addEventListener('resize', resize_content);


