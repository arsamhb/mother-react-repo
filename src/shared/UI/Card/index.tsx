import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <article className="card rounded-sm p-md bg-base-100 shadow-md">{children}</article>;
};

export default Card;
