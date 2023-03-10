import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  className?: string;
}
const Button = ({ className = "", text }: ButtonProps): JSX.Element => {
  return <ButtonStyled className={className}>{text}</ButtonStyled>;
};

export default Button;
