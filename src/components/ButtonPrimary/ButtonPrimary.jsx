import s from "./style.module.css";
import { Logo } from "components/Logo/Logo";
import logo from "assets/images/logo.png";
export function ButtonPrimary({ children, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
