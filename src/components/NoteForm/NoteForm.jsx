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

export function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) {
  //one state for all form values

  const [formValues, setFormValues] = useState({
    title: note?.title || "", //if note exists then display title, set form values with existing values
    content: note?.content || "",
  });

  //if when editing, if note exists then enable else disable
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
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

  const hasError = () => {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        //if defined
        return true;
      }
    }
    return false;
  };

  //small components

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill onClick={onClickDelete} className={s.icon} />
        )}
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
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  //textarea for contentInput
  const contentInput = (
    <div className="mb-5">
      <label className="form-label"> Content </label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        rows="5"
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        isDisabled={hasError()}
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

      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">{isEditable ? contentInput : note.content}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
