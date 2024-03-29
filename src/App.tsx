import { useCallback, useState } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Instruction from "./components/instruction/Instruction";
import {} from "./constants/constants";
import { useDispatch } from "react-redux";
import { toggleModal } from "./redux/store";
import FaceBook from "./components/facebook/Facebook"

export enum CURRENCY {
  UAH = "Гривна",
  USD = "Доллар",
  EUR = "Евро",
}

export type CURRENCY_KEY = "UAH" | "USD" | "EUR"

export interface Rates {
  USD: number
  EUR: number
}
export interface ApiData {
  succes: boolean
  timeStamp: number
  historical: boolean
  base: string
  date: string
  rates: Rates
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
  })

  // useEffect(() => {
  //   const date = new Date();
  //   const ISOdate = date.toISOString().split("T")[0];
  //   fetch(`${BASE_URL}${ISOdate}?symbols=${SYMBOLS}&base=${BASE_CURRENCY}`, {
  //     method: "GET",
  //     redirect: "follow",
  //     headers: {
  //       apikey: API_KEY,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => setApidata(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  const dispatch = useDispatch()

  const openModal = useCallback(() => {
    dispatch(toggleModal())
  }, [dispatch])

  return (
    <div className="App">
      <FaceBook />
      <Header rates={apiData?.rates} />
      <main className="appContainer">
        <Calculator rates={apiData?.rates} />
        <Instruction />
        <button className="buttonAbout" onClick={openModal}>
          Узнать больше о калькуляторе валют
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default App;
