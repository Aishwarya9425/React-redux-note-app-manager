import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { useState } from "react";
import { ValidatorService } from "services/validator";
import { FieldError } from "components/FieldError/FieldError";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 5) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 10);
  },
};

//console.log(VALIDATOR.content("ee"));

export function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  //one state for all form values

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: undefined,
    content: undefined,
  });
  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //this will replace prev values , so need to use previous form values
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const validate = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };

  //small components

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && <TrashFill className={s.icon} />}
      </div>
    </>
  );

  //update formValues when the value changes
  const titleInput = (
    <div className="mb-5">
      <label className="form-label"> Title </label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label"> Content </label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        rows="5"
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        onClick={() => {
          onSubmit(formValues);
        }}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
