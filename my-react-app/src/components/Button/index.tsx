import "./index.scss";
interface ButtonProps {
  text?: string;
  textSize?: string;
  icon?: React.ReactNode;
  iconSize?: number;
  disabled?: boolean;
  styles?: React.CSSProperties;
  btnClass?: "btn-primary" | "btn-secondary";
  borderRadius?: number;
  onClick?(): void;
  loading?: boolean;
}

const Button = ({
  text,
  textSize,
  disabled = false,
  icon,
  iconSize,
  btnClass = "btn-primary",
  onClick,
  borderRadius,
  styles,
  loading,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick && !loading) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        disabled
          ? `button_container ${btnClass} disabled`
          : `button_container ${btnClass}`
      }
      style={{ borderRadius: `${borderRadius}px`, ...styles }}
    >
      {text && (
        <div className="button_text_container">
          <div
            className={loading ? "text--container loading" : "text--container"}
          >
            <span style={{ fontSize: textSize }}>{text}</span>
            {loading && <div className="loading--pulse"></div>}
          </div>
        </div>
      )}
      {icon && (
        <p
          className="button_icon_container"
          style={{ fontSize: `${iconSize}px` }}
        >
          {icon}
        </p>
      )}
    </div>
  );
};

export default Button;
