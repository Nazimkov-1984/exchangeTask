import React, { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Header from "./components/header/Header";
import {
  API_KEY,
  BASE_CURRENCY,
  BASE_URL,
  SYMBOLS,
} from "./constants/constants";

export enum CURRENCY {
  UAH = "Гривна",
  USD = "Доллар",
  EUR = "Евро",
}

export type CURRENCY_KEY = "UAH" | "USD" | "EUR";

export interface Rates {
  USD: number;
  EUR: number;
}
export interface ApiData {
  succes: boolean;
  timeStamp: number;
  historical: boolean;
  base: string;
  date: string;
  rates: Rates;
}

const App = () => {
  const [apiData] = useState<ApiData>({
    succes: true,
    timeStamp: 654656565,
    historical: true,
    base: "UAH",
    date: "2022-01-20",
    rates: {
      USD: 0.34252,
      EUR: 0.36525,
    },
  });

  useEffect(() => {
    // const date = new Date();
    // const ISOdate = date.toISOString().split("T")[0];
    // fetch(`${BASE_URL}${ISOdate}?symbols=${SYMBOLS}&base=${BASE_CURRENCY}`, {
    //   method: "GET",
    //   redirect: "follow",
    //   headers: {
    //     apikey: API_KEY,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => setApidata(result))
    //   .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Header rates={apiData?.rates} />
      <main className="appContainer">
        <Calculator rates={apiData?.rates} />
      </main>
    </div>
  );
};

export default App;
