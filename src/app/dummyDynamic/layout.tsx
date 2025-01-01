import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <div>
            <h2>IT'S COMING FROM DUMMY DYNAMIC LAYOUT</h2>
        </div>
        {children}
    </div>
  );
};

export default layout;
