import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
}) => {
  return (
    <button onClick={onClick} className={`button-${variant}-theme`}>
      {children}
    </button>
  );
};

export default Button;
