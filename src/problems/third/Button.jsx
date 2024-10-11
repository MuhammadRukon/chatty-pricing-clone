const Button = ({ variant, children, onClick }) => {
  const style = {
    "icon-arrow-primary": { backgroundColor: "blue", color: "white" },
    "icon-arrow-secondary": { backgroundColor: "gray", color: "black" },
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "black" },
  };

  return (
    <button style={style[variant] || {}} onClick={onClick}>
      {variant?.includes("arrow") ? <span>&rarr;</span> : ""}
      {children}
    </button>
  );
};
export default Button;
