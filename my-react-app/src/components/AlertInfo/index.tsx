import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./index.scss";

interface AlertInfoProps {
  text: string;
  textBtn?: string;
  onScape?: () => void;
  icon?: React.ReactNode;
  maxWidth?: number;
  height?: number;
}

const AlertInfo = ({
  text = "Alerta",
  textBtn = "Botón",
  onScape,
  icon,
  maxWidth = 500,
  height = 500,
}: AlertInfoProps) => {
  const navigate = useNavigate();
  const handleAlert = () => {
    onScape ? onScape() : navigate("/");
  };
  return (
    <div
      className="alert--info--container"
      style={{ maxWidth: `${maxWidth}px`, height: `${height}px` }}
    >
      <strong>{text}</strong>
      <div className="alert--info--icon">{icon}</div>
      <Button text={textBtn} onClick={handleAlert} />
    </div>
  );
};

export default AlertInfo;
