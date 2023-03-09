interface ButtonProps {
  text: string;
  className?: string;
}
const Button = ({ className = "", text }: ButtonProps): JSX.Element => {
  return <button className={className}>{text}</button>;
};

export default Button;
