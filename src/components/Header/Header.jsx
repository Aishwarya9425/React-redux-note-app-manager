import s from "./style.module.css";
import { Logo } from "components/Logo/Logo";
import logo from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useNavigate } from "react-router-dom";
export function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          image={logo}
          title={"NoteIt! "}
          subtitle={"Your go to journal!"}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end ">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Add Note ➕📝
        </ButtonPrimary>
      </div>
    </div>
  );
}
