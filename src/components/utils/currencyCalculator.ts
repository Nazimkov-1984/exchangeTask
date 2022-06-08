import { Rates } from "../../App";
import { MULTIPLIER } from "../../constants/constants";

const currencyCalculator = (value:string, conditionCurrency:string, destinationCurrency:string, rates:Rates | undefined) => {
    let result:number = 0 ;
   if(conditionCurrency === "UAH" && ((destinationCurrency === "USD" || destinationCurrency=== "EUR") )) {
       //@ts-ignore
       result = Number(value) / (rates[destinationCurrency] * MULTIPLIER);
   } else 
        if( (conditionCurrency === "USD" || conditionCurrency === "EUR") && destinationCurrency === "UAH") {
                 //@ts-ignore
       result = Number(value) *(rates[conditionCurrency] * MULTIPLIER);
                     //@ts-ignore
   } else if(conditionCurrency === "EUR" && destinationCurrency === "USD") {
              //@ts-ignore
       result = Number(value) * (rates[conditionCurrency] / rates[destinationCurrency]);
   } else if(conditionCurrency === "USD" && destinationCurrency === "EUR") {
              //@ts-ignore
              result = Number(value) * (rates[conditionCurrency] / rates[destinationCurrency]);
   }
return result.toFixed(3);
}

export default currencyCalculator;

