import React from "react";
import { FaImage } from "react-icons/fa";
import "./index.scss";

interface InputImageProps {
  value: Blob | null;
  onChange: (value: Blob) => void;
}

const InputImage = ({ value, onChange }: InputImageProps) => {
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };
  return (
    <div className="input--image--container">
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        alt="Imagen"
        onChange={handleChangeImage}
      />
      <div className="input--image--selected">
        {value ? <img src={URL.createObjectURL(value)}></img> : <FaImage />}
      </div>
    </div>
  );
};

export default InputImage;
