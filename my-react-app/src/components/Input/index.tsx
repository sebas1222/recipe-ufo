import React from "react";
import "./index.scss";

export interface InputProps {
  placeholder?: string;
  name?: string;
  value: string;
  onChange(value: string): void;
  icon?: React.ReactNode;
  type: "text" | "number" | "password" | "email" | "date" | "datetime-local";
  regex?: RegExp;
}

const Input = ({
  placeholder,
  name,
  value,
  icon,
  type,
  regex,
  onChange,
}: InputProps) => {
  const handleChangeInput = (value: string) => {
    if (regex) {
      if (regex.test(value)) {
        onChange(value);
        console.log("pasa");
      } else {
        console.log("no pasa");
      }
    } else {
      onChange(value);
    }
  };

  const isInputDirty = value?.length > 0;

  return (
    <div
      className={
        isInputDirty ? "input--main--container dirty" : "input--main--container"
      }
    >
      {placeholder && <span className="input--placeholder">{placeholder}</span>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChangeInput(e.target.value)}
        placeholder={placeholder}
      ></input>
      {icon && icon}
    </div>
  );
};

export default Input;
