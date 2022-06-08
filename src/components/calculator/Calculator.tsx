import classNames from "classnames";
import { BaseSyntheticEvent, useCallback, useState } from "react";
import Select from "react-select";
import { CURRENCY, Rates } from "../../App";
import {
  INPUT_PLACEHOLDER,
  SELECT_PLACEHOLDER,
  IS_NUMBER_REG,
  ENTER_KEY_CODE,
  LABEL_TEXT,
} from "../../constants/constants";
import currencyCalculator from "../utils/currencyCalculator";
import "./Calculator.css";

interface CalculatorProps {
  rates: Rates | undefined;
}

interface SelectOption {
  value: string;
  label: string;
  disable?: boolean;
}

const Calculator: React.FC<CalculatorProps> = ({ rates }) => {
  const options: SelectOption[] = [
    { value: "USD", label: CURRENCY.USD },
    { value: "EUR", label: CURRENCY.EUR },
    { value: "UAH", label: CURRENCY.UAH },
  ];

  const [conditionValue, setConditionValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<string>("");
  const [conditionCurrency, setConditionCurrency] = useState<string>("");
  const [resultCurrency, setResultCurrency] = useState<string>("");
  const [isWrongDataInInput, setIsWrongDataInInput] = useState<boolean>(false);
  const [isWrongDataInResult, setIsWrongDataInResult] =
    useState<boolean>(false);

  const onFocusHandler = useCallback((e: BaseSyntheticEvent) => {
    e.target.placeholder = "";
  }, []);

  const onBlurCondition = useCallback(
    (e: BaseSyntheticEvent) => {
      e.target.placeholder = INPUT_PLACEHOLDER;
      const value: string = e.target.value;
      if (value === "" || IS_NUMBER_REG.test(value)) {
        setConditionValue(value);
        setIsWrongDataInInput(false);
        if (conditionCurrency && resultCurrency) {
          setResultValue(
            currencyCalculator(value, conditionCurrency, resultCurrency, rates)
          );
        }
      } else {
        setIsWrongDataInInput(true);
      }
    },
    [conditionCurrency, rates, resultCurrency]
  );

  const onKeyDownCondition = useCallback((e: any) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      const value: string = e.target.value;
      if (value === "" || IS_NUMBER_REG.test(value)) {
        setConditionValue(value);
        setIsWrongDataInInput(false);
      } else {
        setIsWrongDataInInput(true);
      }
    }
  }, []);

  const onKeyDownResult = useCallback(
    (e: any) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        const value: string = e.target.value;
        if (value === "" || IS_NUMBER_REG.test(value)) {
          setResultValue(value);
          setIsWrongDataInResult(false);
          setConditionValue(
            currencyCalculator(value, resultCurrency, conditionCurrency, rates)
          );
        } else {
          setIsWrongDataInResult(true);
        }
      }
    },
    [conditionCurrency, rates, resultCurrency]
  );

  const onBlurResult = useCallback(
    (e: BaseSyntheticEvent) => {
      const value: string = e.target.value;
      if (value === "" || IS_NUMBER_REG.test(value)) {
        setResultValue(value);
        setIsWrongDataInResult(false);
        setConditionValue(
          currencyCalculator(value, resultCurrency, conditionCurrency, rates)
        );
      } else {
        setIsWrongDataInResult(true);
      }
    },
    [conditionCurrency, rates, resultCurrency]
  );

  const onChangeConditionValue = useCallback((e: BaseSyntheticEvent) => {
    const value: string = e.target.value;
    setConditionValue(value);
  }, []);

  const onChangeResultValue = useCallback((e: BaseSyntheticEvent) => {
    const value: string = e.target.value;
    setResultValue(value);
  }, []);

  const onChangeConditionCurrency = useCallback(
    (e: any) => {
      setConditionCurrency(e.value);
      if (resultCurrency) {
        setResultValue(
          currencyCalculator(conditionValue, e.value, resultCurrency, rates)
        );
      }
    },
    [conditionValue, rates, resultCurrency]
  );

  const onChangeResultCurrency = useCallback(
    (e: any) => {
      setResultCurrency(e.value);
      setResultValue(
        currencyCalculator(conditionValue, conditionCurrency, e.value, rates)
      );
    },
    [conditionCurrency, conditionValue, rates]
  );

  return (
    <div className="calculatorWrapper">
      <div className="calculatorItemWrapper">
        <input
          id="conditionInput"
          onFocus={onFocusHandler}
          onBlur={onBlurCondition}
          type={"text"}
          placeholder={INPUT_PLACEHOLDER}
          className={classNames("calculatorInput", {
            inputError: isWrongDataInInput,
          })}
          value={conditionValue}
          onChange={onChangeConditionValue}
          onKeyDown={onKeyDownCondition}
        ></input>
        {isWrongDataInInput && (
          <label htmlFor="conditionInput" className="labelConditionInput">
            {LABEL_TEXT}
          </label>
        )}
        <Select
          className="react-select-container"
          classNamePrefix={"react-select"}
          options={options.filter(
            (item: SelectOption) => item.value !== resultCurrency
          )}
          placeholder={SELECT_PLACEHOLDER}
          onChange={onChangeConditionCurrency}
        />
      </div>
      <div className="calculatorItemWrapper">
        <input
          id="resultInput"
          className={classNames("calculatorInput", {
            inputError: isWrongDataInResult,
          })}
          type={"text"}
          value={resultValue}
          onChange={onChangeResultValue}
          onBlur={onBlurResult}
          disabled={
            conditionValue === "" ||
            conditionCurrency === "" ||
            resultCurrency === ""
          }
          onKeyDown={onKeyDownResult}
        ></input>
        {isWrongDataInResult && (
          <label htmlFor="resultInput" className="labelConditionInput">
            {LABEL_TEXT}
          </label>
        )}
        <Select
          className="react-select-container"
          classNamePrefix={"react-select"}
          options={options.filter(
            (item: SelectOption) => item.value !== conditionCurrency
          )}
          placeholder={SELECT_PLACEHOLDER}
          onChange={onChangeResultCurrency}
        />
      </div>
    </div>
  );
};

export default Calculator;
