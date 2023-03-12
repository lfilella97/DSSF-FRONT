import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  className = "",
  text,
  type = "button",
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type={type} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
