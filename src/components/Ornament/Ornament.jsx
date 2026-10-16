import { FaBalanceScale } from "react-icons/fa";
import "./Ornament.css";

// A small "line - scales of justice - line" divider.
function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span />
      <FaBalanceScale />
      <span />
    </div>
  );
}

export default Ornament;
