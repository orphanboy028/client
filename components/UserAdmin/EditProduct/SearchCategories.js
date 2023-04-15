import React, { useContext, useEffect, useState } from "react";
import style from "../css/SearchCategories.module.css";
// import { allCategories } from "../../FormData/categories";
import { categoriesContext } from "../../../ContaxtApi/CategoriesContaxApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchCategories() {
  const { allCategories } = useContext(categoriesContext);
  const { selectedItem, setSelectedItem } = useContext(AppUtilsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [mainCat, setmainCat] = useState("");
  const [lefCat, setlefCat] = useState([]);
  const [subCat, setsubCat] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  // model
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelChnage = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearch = (e) => {
    const results = [];

    // search in categories, subcategories, lefcategories subCategory subCategories lefCategory lefCategories
    allCategories.forEach((category) => {
      category.subCategory.forEach((subCategories) => {
        subCategories.lefCategory.forEach((lefCategories) => {
          if (
            lefCategories.lefCategoryName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            subCategories.subCategoryName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            category.categoryName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            results.push({
              lefName: lefCategories.lefCategoryName,
              subName: subCategories.subCategoryName,
              categoryName: category.categoryName,
            });
          }
        });
      });
    });
    setSearchResult(results);
  };

  const handleSelectLefCategory = (lefName) => {
    const result = allCategories.find((category) =>
      category.subCategory.some((subCategories) =>
        subCategories.lefCategory.some(
          (lefCategories) => lefCategories.lefCategoryName === lefName
        )
      )
    );

    if (result) {
      const subCategory = result.subCategory.find((subCategories) =>
        subCategories.lefCategory.some(
          (lefCategories) => lefCategories.lefCategoryName == lefName
        )
      );
      const category = {
        id: result._id,
        categoryName: result.categoryName,
        slug: result.slug,
      };

      const subCategoryId = subCategory._id;
      const lefCategoryId = subCategory.lefCategory.find(
        (lefCategories) => lefCategories.lefCategoryName === lefName
      )._id;

      // console.log("Selected lef category:", lefName);
      // console.log("Selected sub category:", subCategory.subCategoryName);
      // console.log("Selected category:", category.categoryName);
      // console.log("Selected subCategoryId:", subCategoryId);
      // console.log("Selected lefCategoryId:", lefCategoryId);
    }
  };

  function handleRadioChange(event) {
    setSelectedItem(event.target.value);
  }

  return (
    <>
      <div>
        <div className={style.selected_CategoriesBox}>
          <div>
            <Badge pill bg="secondary" className="p-3">
              {selectedItem}
            </Badge>
          </div>
          <div className={style.edit_Selected_Categories}>
            <FontAwesomeIcon icon={faPencil} onClick={handleShow} />
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={style.SearchCategories_SearchContainer}>
              <div className={style.SearchCategories_InputBox}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handelChnage}
                  placeholder="search categories"
                />
                <div onClick={handleSearch} className={style.searchIconBox}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                </div>
              </div>
            </div>

            <div className={style.searchList_Container}>
              {searchResult.map((result) => (
                <div className={style.forSelect} key={result.lefName}>
                  <div
                    className={style.checkBox_box}
                    onClick={() => handleSelectLefCategory(result.lefName)}
                  >
                    <input
                      type="radio"
                      name={"lef"}
                      // checked={checkedItems[result.lefName] || false}
                      // checked={checkedItems}
                      checked={selectedItem === result.lefName}
                      onChange={handleRadioChange}
                      value={result.lefName}
                    />
                  </div>
                  <div>
                    <p>{result.lefName}</p>
                    <p>{result.subName}</p>
                    <p>{result.categoryName}</p>
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
