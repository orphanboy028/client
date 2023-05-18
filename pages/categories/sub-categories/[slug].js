import React from "react";
import PageLayOut from "../../../components/layouts/PageLayOut";
import SubCategoriesComponent from "../../../components/categories/SubCategoriesComponent";
import UserAdminLayout from "../../../components/UserAdmin/UserAdminLayout";

export default function SubCategoriesPage() {
  return (
    <>
      <UserAdminLayout>
        <SubCategoriesComponent />
      </UserAdminLayout>
    </>
  );
}
