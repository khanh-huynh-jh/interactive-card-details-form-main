const CARD_NUMBER_INPUT_ID = "card-number-input";
const CVC_INPUT_ID = "cvc-input";
const MONTH_EXPIRED_INPUT_ID = "month-expired-input";
const YEAR_EXPIRED_INPUT_ID = "year-expired-input";
const CARD_HOLDER_NAME_INPUT_ID = "cardholder-name-input";

const DEFAULT_INPUT_VALUE = new Map([
    [CARD_HOLDER_NAME_INPUT_ID, "JANE APPLESEED"],
    [CARD_NUMBER_INPUT_ID, "0000 0000 0000 0000"],
    [MONTH_EXPIRED_INPUT_ID, "00"],
    [YEAR_EXPIRED_INPUT_ID, "00"],
    [CVC_INPUT_ID, "000"],
]);

const INTERACTIVE_DISPLAY = {
    [`${CARD_HOLDER_NAME_INPUT_ID}`]: ".cardholder-name",
    [`${CARD_NUMBER_INPUT_ID}`]: ".card-number",
    [`${MONTH_EXPIRED_INPUT_ID}`]: ".month-exp",
    [`${YEAR_EXPIRED_INPUT_ID}`]: ".year-exp",
    [`${CVC_INPUT_ID}`]: ".back-card p"

};

const MESSAGE_ID = {
    [`${CARD_HOLDER_NAME_INPUT_ID}`]: "#invalid-cardholder-name",
    [`${CARD_NUMBER_INPUT_ID}`]: "#invalid-card-number",
    [`${MONTH_EXPIRED_INPUT_ID}`]: "#invalid-month",
    [`${YEAR_EXPIRED_INPUT_ID}`]: "#invalid-year",
    [`${CVC_INPUT_ID}`]: "#invalid-cvc"
}

const MAXIMUM_LENGTH_CVC = 3;
const MAXIMUM_LENGTH_CARD_NUMBER = 19;
const MAXIMUM_LENGTH_DATE = 2

const ASCII_CODE_OF_ZERO = 48;
const ASCII_CODE_OF_NINE = 57;

const input_elements_array = document.querySelectorAll("input");
const submit_btn = document.querySelector("#submit-btn");
const card_number_input = document.querySelector(`#${CARD_NUMBER_INPUT_ID}`);
const year_expired_input = document.querySelector(`#${YEAR_EXPIRED_INPUT_ID}`);
const month_expired_input = document.querySelector(`#${MONTH_EXPIRED_INPUT_ID}`);
const cvc_input = document.querySelector(`#${CVC_INPUT_ID}`);
const body = document.querySelector('body');
