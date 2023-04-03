import { createContext, useEffect, useState } from "react";

export const AppUtilsContext = createContext();

export const AppUilsContextProvider = ({ children }) => {
  const [openProfleBox, setopenProfleBox] = useState(false);
  const [formloading, setformloading] = useState(false);
  const [prtectLoading, setprtectLoading] = useState(false);

  const handelMouseHover = () => {
    setopenProfleBox(true);
  };

  const handelMoveLeave = () => {
    setopenProfleBox(false);
  };

  return (
    <AppUtilsContext.Provider
      value={{
        openProfleBox,
        handelMouseHover,
        handelMoveLeave,
        formloading,
        setformloading,
        prtectLoading,
        setprtectLoading,
      }}
    >
      {children}
    </AppUtilsContext.Provider>
  );
};
