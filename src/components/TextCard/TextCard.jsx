import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";
import { useState } from "react";

export function TextCard({ title, content, subtitle, onClick, onClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setTrashHovered] = useState(false);

  // e.stopPropagation to prevent event bubbling
  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }
  return (
    <div
      onClick={onClick}
      className={`card ${s.container} `}
      style={{ borderColor: isCardHovered ? "#daa520" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className={s.title_row}>{title}</h5>
          <Trash
            onClick={onClickTrash_}
            size={20}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onMouseEnter={() => setTrashHovered(true)}
            onMouseLeave={() => setTrashHovered(false)}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
