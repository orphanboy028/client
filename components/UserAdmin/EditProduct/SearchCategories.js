import React, { useContext, useEffect, useState } from "react";
import style from "../css/SearchCategories.module.css";
// import { allCategories } from "../../FormData/categories";
import { categoriesContext } from "../../../ContaxtApi/CategoriesContaxApi";
import { AppUtilsContext } from "../../../ContaxtApi/AppUtilsContaxApi";

export default function SearchCategories() {
  const { allCategories } = useContext(categoriesContext);
  const { selectedItem, setSelectedItem } = useContext(AppUtilsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [mainCat, setmainCat] = useState("");
  const [lefCat, setlefCat] = useState([]);
  const [subCat, setsubCat] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

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
        <div>{selectedItem}</div>
        <input type="text" value={searchTerm} onChange={handelChnage} />
        <button onClick={handleSearch}>search</button>
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
      </div>
    </>
  );
}
