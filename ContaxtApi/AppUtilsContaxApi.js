import { createContext, useEffect, useState } from "react";
import { getForm } from "../Actions/adminAuth/FormAction";

export const AppUtilsContext = createContext();

export const AppUilsContextProvider = ({ children }) => {
  const [openProfleBox, setopenProfleBox] = useState(false);
  const [formloading, setformloading] = useState(false);
  const [prtectLoading, setprtectLoading] = useState(false);
  const [key, setKey] = useState("BusinessDeails");
  // This state for when user select any categories
  const [selectedItem, setSelectedItem] = useState("");
  const [formSeleted, setformSeleted] = useState([]);
  const [showModel, setshowModel] = useState(false);
  const [appFillterShow, setappFillterShow] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handelSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Profile tab
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //  React Boot Strap Model
  const handleModelClose = () => {
    setshowModel(false);
    setSelectedItem(selectedItem);
    console.log(selectedItem);
  };
  const handleModelShow = () => setshowModel(true);

  const handelMouseHover = () => {
    setopenProfleBox(true);
  };

  const handelMoveLeave = () => {
    setopenProfleBox(false);
  };

  const handelTab = (tabName) => {
    setKey(tabName);
  };

  useEffect(() => {
    async function getFormAction() {
      try {
        if (selectedItem) {
          console.log(selectedItem);
          const result = await getForm(selectedItem);

          const formFieldsArray = result.data.selectedForm.formFields.map(
            (item) => {
              const { _id, ...rest } = item;
              return rest;
            }
          );
          // console.log(formFieldsArray);
          setformSeleted(formFieldsArray);
        }
      } catch (error) {
        console.log(error.response);
      }
    }
    getFormAction();
  }, [selectedItem]);

  const [formData, setFormData] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("lefcategories", formData.leftCategory);
  }

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
        key,
        setKey,
        handelTab,
        selectedItem,
        setSelectedItem,
        formSeleted,
        showModel,
        setshowModel,
        handleModelClose,
        handleModelShow,
        toggleTab,
        toggleState,
        appFillterShow,
        setappFillterShow,
        handleInputChange,
        formData,
        setFormData,
        handelSidebar,
        isSidebarVisible,
        setIsSidebarVisible,
      }}
    >
      {children}
    </AppUtilsContext.Provider>
  );
};
