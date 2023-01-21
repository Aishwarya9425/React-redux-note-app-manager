import s from "./style.module.css";
import { Logo } from "components/Logo/Logo";
import logo from "assets/images/logo.png";
export function ButtonPrimary({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
