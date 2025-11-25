import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card rounded-sm p-md bg-base-100 shadow-md">{children}</div>;
};

export default Card;
