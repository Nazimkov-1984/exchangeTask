import { INSTRUCTION_TEXT } from "../../constants/constants";
import "./Instruction.css";

const Instruction: React.FC = () => {
  return (
    <p data-testid="instruction" className="instruction">
      {INSTRUCTION_TEXT}
    </p>
  );
};

export default Instruction;
