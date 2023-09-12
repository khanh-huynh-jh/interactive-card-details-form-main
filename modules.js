function resize_content() {
    if (screen.width > 820) {
        document.documentElement.style.setProperty("--scale", (window.innerWidth / 1536));
    }
}

function validate_character(c) {
    if (c == null) {
        return false;
    }
    if (c.charCodeAt(0) < ASCII_CODE_OF_ZERO || c.charCodeAt(0) > ASCII_CODE_OF_NINE) {
        return true;
    }
    return false
}

function display_error(id, message_content) {
    message = document.querySelector(MESSAGE_ID[id]);
    message.innerHTML = message_content;
    message.style.color = "hsl(0, 100%, 66%)";
    
}

function message_invalid_value(id, data, element, value = '') {
    if (id == 'month-expired-input') {
        if ((value > 12) || (value.length == 2 && value == 0) || validate_character(data)) {
            display_error(id, "Invalid value");
            element.value = value.slice(0, -1);
        }
    }
    else {
        if (validate_character(data)) {
            display_error(id, "Inalid value");
            element.value = value.slice(0, -1);
        }
    }
}

function contain_non_number(card_number) {
    let n = card_number.length;

    for (let i = 0; i < n; i++) {
        char_code = card_number.charCodeAt(i);
        if (char_code != 32) {
            if (char_code < 48 || char_code > 57) {
                return true;
            }
        }
    }

    return false;
}

function validate_length(id, length) {
    if (length === 0) {
        return false;
    }
    switch (id) {
        case "cvc-input":
            return length < MAXIMUM_LENGTH_CVC;
        case "card-number-input":
            return length < MAXIMUM_LENGTH_CARD_NUMBER;
        default:
            return length < MAXIMUM_LENGTH_DATE;
    }
}

function display_default_value() {
    for (let i = 0; i < input_elements_array.length; i++) {
        if (input_elements_array[i].value.length === 0) {
            let interactive_info_element = document.querySelector(INTERACTIVE_DISPLAY[input_elements_array[i].id]);
            interactive_info_element.innerText = DEFAULT_INPUT_VALUE.get(input_elements_array[i].id);
        }
    }
}

