import React from "react";
import { useField } from "formik";
import "./index.scss";

interface InputFormProps {
  placeholder?: string;
  name: string;
  icon?: React.ReactNode;
  type: "text" | "password" | "email" | "date" | "datetime-local";
  regex?: RegExp;
}

const InputForm = ({
  placeholder,
  name,
  icon,
  type,
  regex,
}: InputFormProps) => {
  const [field, meta, helpers] = useField(name);
  const handleChange = (value: string) => {
    if (regex) {
      if (regex.test(value)) {
        helpers.setValue(value);
      } else if (value.length === 0) {
        helpers.setValue("");
      }
    } else {
      helpers.setValue(value);
    }
  };

  const isInputDirty = field?.value?.length > 0;

  return (
    <div className="input--form--container">
      <div
        className={
          meta.touched && meta.error
            ? "input--form--item error"
            : "input--form--item"
        }
      >
        <span
          className={
            isInputDirty
              ? "input--form--placeholder dirty"
              : "input--form--placeholder"
          }
        >
          {placeholder}
        </span>
        <input
          id={field.name}
          type={type}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          name={field.name}
          value={field.value}
        ></input>
        {icon && <span className="input--form--icon">{icon}</span>}
      </div>
      <p className="input--form--error">
        {meta.touched && meta.error ? `${meta.error}` : ""}
      </p>
    </div>
  );
};

export default InputForm;
