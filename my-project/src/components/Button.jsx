import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `
  button 
  relative 
  inline-flex 
  items-center 
  justify-center 
  h-11 
  px-7 
  transition-all 
  duration-300 
  ease-in-out 
  rounded-full 
  border-2 
  border-solid 
  border-opacity-70 
  shadow-md 
  hover:shadow-lg 
  hover:scale-105 
  hover:border-opacity-100 
  hover:bg-opacity-95 
  ${white ? "bg-color-1 text-color-5" : "bg-color-1 text-color-6"} 
  ${className || ""}
`;

  const spanClasses = "relative z-10 font-semibold tracking-wide uppercase";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
