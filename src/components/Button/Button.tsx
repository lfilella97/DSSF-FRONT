import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
const Button = ({
  className = "",
  text,
  type = "button",
  onClick = () => {},
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type={type} className={className} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
