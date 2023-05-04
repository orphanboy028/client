import React from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import MainCategoriesComponent from "../../components/categories/MainCategoriesComponent";

export default function MainCategoriesPage() {
  return (
    <>
      <div>
        <PageLayOut>
          <MainCategoriesComponent />
        </PageLayOut>
      </div>
    </>
  );
}
