import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      {children}
    </div>
  );
};

export default layout;
