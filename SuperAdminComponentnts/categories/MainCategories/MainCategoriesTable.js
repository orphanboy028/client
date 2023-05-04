import React, { useContext } from "react";
import style from "../css/MainCategories.module.css";
import Table from "react-bootstrap/Table";
import { categoriesContext } from "../../../ContaxtApi/CategoriesContaxApi";
import Image from "next/image";
export default function MainCategoriesTable() {
  const { allCategories } = useContext(categoriesContext);

  console.log(allCategories);
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S . NO</th>
              <th>IMage</th>
              <th>ICON</th>
              <th>Categories Name</th>
              <th>Sub Categories</th>

              <th>Sub Categories Page</th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((categories, i) => {
              return (
                <>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <div className={style.table_imageBox}>
                        <Image
                          src={`/categories-images/${categories?.categoryImage}`}
                          fill
                          alt="Categories-image"
                        />
                      </div>
                    </td>
                    <td>Otto</td>
                    <td>{categories?.categoryName}</td>
                    <td>{categories?.subCategory.length}</td>

                    <td>Go To</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
