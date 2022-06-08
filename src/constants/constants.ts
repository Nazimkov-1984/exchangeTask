const MULTIPLIER:number = 100;
const TITLE = "Текущий курс валют";
const INPUT_PLACEHOLDER: string = "Ведите сумму...";
const SELECT_PLACEHOLDER: string = "Выберите валюту...";
const API_KEY: string = "ZMjWboLbbIXTlevt6O0ztdbIkOpqMuNP";
const BASE_URL: string = "https://api.apilayer.com/exchangerates_data/";
const BASE_CURRENCY: string = "UAH";
const SYMBOLS: string = "USD,EUR";
const ENTER_KEY_CODE:number = 13;
const LABEL_TEXT:string = "Введите число, например 22.155";

const IS_NUMBER_REG = new RegExp(/^(0|[1-9]\d*)(\.[0-9]{1,3})?$/);

 

export  {MULTIPLIER, TITLE, INPUT_PLACEHOLDER, SELECT_PLACEHOLDER, API_KEY, BASE_URL, BASE_CURRENCY, SYMBOLS, IS_NUMBER_REG,ENTER_KEY_CODE, LABEL_TEXT };