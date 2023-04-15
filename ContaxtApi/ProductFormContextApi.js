import { createContext, useEffect, useState } from "react";

export const ProductFormContext = createContext();

export const ProductFormContextProvider = ({ children }) => {
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [addButton, setaddButton] = useState(false);
  const [tabs, settabs] = useState("baisc-details");
  const [isActiveButton1, setIsActiveButton1] = useState(true);
  const [isActiveButton2, setIsActiveButton2] = useState(false);

  const handleClickButton1 = (tab) => {
    setIsActiveButton1(true);
    setIsActiveButton2(false);
    settabs(tab);
  };

  const handleClickButton2 = (tab) => {
    setIsActiveButton1(false);
    setIsActiveButton2(true);
    settabs(tab);
  };

  const handelTabselect = (tab) => {
    console.log(tab);
    settabs(tab);
  };

  const handelAddProductBox = () => {
    setaddButton(true);
  };

  return (
    <ProductFormContext.Provider
      value={{
        buttonEnabled,
        handelTabselect,
        handelAddProductBox,
        addButton,
        tabs,
        handleClickButton2,
        handleClickButton1,
        isActiveButton1,
        isActiveButton2,
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};
