import { CURRENCY_KEY, Rates } from "../../App";
import "./Header.css";
import Flag from "react-world-flags";
import { useMemo } from "react";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { MULTIPLIER, TITLE } from "../../constants/constants";

interface HeaderProps {
  rates: Rates | undefined;
}

enum FLAGS {
  UAH = "UA",
  USD = "USA",
  EUR = "EU",
}

const Header: React.FC<HeaderProps> = ({ rates }) => {
  const ratesArray: string[] | undefined = useMemo(() => {
    if (rates) {
      return Object.keys(rates);
    }
  }, [rates]);

  return (
    <header data-testid="header" className="header">
      <div className="headerTitleContainer">
        <Logo className={"headerLogo"} />
        <h2 className="headerTitle">{TITLE}</h2>
      </div>

      <ul className="headerListValues">
        {ratesArray?.map((item: string) => {
          const flagKey: CURRENCY_KEY = item as CURRENCY_KEY;
          //@ts-ignore
          const value: number = rates[item] * MULTIPLIER;
          return (
            <li className="headerValueItem" key={item}>
              <span>{item}</span>
              <Flag
                data-testid="flag"
                style={{ width: 30, height: 50, marginRight: 6 }}
                code={FLAGS[flagKey]}
              />
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
