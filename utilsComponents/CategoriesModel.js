import React, { useContext, useState } from "react";
import style from "./css/CategoriesModel.module.css";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import { categoriesContext } from "../ContaxtApi/CategoriesContaxApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CategoriesFilliter from "./CategoriesFilliter";
import { EnquiryContext } from "../ContaxtApi/EnquiryContaxApi";

export default function CategoriesModel({
  setSelectedItem,
  handleRadioChange,
}) {
  const {
    showModel,
    setshowModel,
    handleModelClose,
    handleModelShow,
    selectedItem,
  } = useContext(AppUtilsContext);
  const { setselectedCategories } = useContext(EnquiryContext);
  const { allCategories } = useContext(categoriesContext);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   const results = [];
  //   // search in categories, subcategories, lefcategories subCategory subCategories lefCategory lefCategories
  //   allCategories.forEach((category) => {
  //     category.subCategory.forEach((subCategories) => {
  //       subCategories.lefCategory.forEach((lefCategories) => {
  //         if (
  //           lefCategories.lefCategoryName
  //             .toLowerCase()
  //             .includes(searchTerm.toLowerCase()) ||
  //           subCategories.subCategoryName
  //             .toLowerCase()
  //             .includes(searchTerm.toLowerCase()) ||
  //           category.categoryName
  //             .toLowerCase()
  //             .includes(searchTerm.toLowerCase())
  //         ) {
  //           results.push({
  //             lefName: lefCategories.lefCategoryName,
  //             subName: subCategories.subCategoryName,
  //             categoryName: category.categoryName,
  //           });
  //         }
  //       });
  //     });
  //   });
  //   setSearchResult(results);
  // };

  // const handleSelectLefCategory = (lefName) => {
  //   const result = allCategories.find((category) =>
  //     category.subCategory.some((subCategories) =>
  //       subCategories.lefCategory.some(
  //         (lefCategories) => lefCategories.lefCategoryName === lefName
  //       )
  //     )
  //   );

  //   if (result) {
  //     const subCategory = result.subCategory.find((subCategories) =>
  //       subCategories.lefCategory.some(
  //         (lefCategories) => lefCategories.lefCategoryName == lefName
  //       )
  //     );
  //     const category = {
  //       id: result._id,
  //       categoryName: result.categoryName,
  //       slug: result.slug,
  //     };

  //     const subCategoryId = subCategory._id;
  //     const lefCategoryId = subCategory.lefCategory.find(
  //       (lefCategories) => lefCategories.lefCategoryName === lefName
  //     )._id;

  //     // console.log("Selected lef category:", lefName);
  //     // console.log("Selected sub category:", subCategory.subCategoryName);
  //     // console.log("Selected category:", category.categoryName);
  //     // console.log("Selected subCategoryId:", subCategoryId);
  //     // console.log("Selected lefCategoryId:", lefCategoryId);
  //   }
  // };

  // function handleRadioChange(event) {
  //   setSelectedItem(event.target.value);
  // }

  return (
    <>
      <div>
        <Modal
          show={showModel}
          onHide={handleModelClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoriesFilliter
              selectedState={setselectedCategories}
              connectWith="seprateState"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleModelClose}
              id="closeBtn"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
