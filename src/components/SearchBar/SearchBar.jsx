import s from "./style.module.css";
import { Search as SearchIcons } from "react-bootstrap-icons";
export function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchIcons size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        onChange={(e) => {
          onTextChange(e.target.value);
        }}
        placeholder={placeholder}
      />{" "}
    </>
  );
}
