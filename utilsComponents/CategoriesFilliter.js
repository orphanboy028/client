import React, { useContext, useState } from "react";
import { categoriesContext } from "../ContaxtApi/CategoriesContaxApi";
import style from "./css/CategoriesModel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AppUtilsContext } from "../ContaxtApi/AppUtilsContaxApi";
import { EnquiryContext } from "../ContaxtApi/EnquiryContaxApi";

export default function CategoriesFilliter() {
  const { selectedItem, setSelectedItem } = useContext(AppUtilsContext);
  const { allCategories } = useContext(categoriesContext);
  const { setselectedCategories } = useContext(EnquiryContext);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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
    setselectedCategories(event.target.value);
  }
  return (
    <>
      <div className={style.CategoriesModel_SearchInputBox}>
        <div className={style.CategoriesModel_input_Box}>
          <input
            type="text"
            placeholder="search Categories"
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
          <div className={style.CategoriesModel_search_Icon}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
              onClick={handleSearch}
              style={{ zIndex: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className={style.CategoriesModel_search_list_container}>
        {searchResult.map((result) => (
          <div className={style.CategoriesModel_forSelect} key={result.lefName}>
            <div
              className={style.CategoriesModel_checkBox_box}
              onClick={() => handleSelectLefCategory(result.lefName)}
            >
              <input
                type="radio"
                name={"lef"}
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
    </>
  );
}
