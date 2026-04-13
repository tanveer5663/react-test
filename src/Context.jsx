import React from "react";

const MyContext = React.createContext();
function Context({ children }) {
  const [value, setValue] = React.useState(1);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
export { MyContext };

export default Context;
