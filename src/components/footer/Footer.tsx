import { FOOTER_TEXT } from "../../constants/constants";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer data-testid="footer" className="footer">
      <a
        className="footerLink"
        target={"_blank"}
        href="https://www.linkedin.com/in/mykola-nazimkov-6b29b218a/"
        rel="noreferrer"
      >
        {FOOTER_TEXT}
      </a>
    </footer>
  );
};

export default Footer;
