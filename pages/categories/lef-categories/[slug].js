import React from "react";
import PageLayOut from "../../../components/layouts/PageLayOut";
import LefCategoriesComponent from "../../../components/categories/LefCategoriesComponent";
import UserAdminLayout from "../../../components/UserAdmin/UserAdminLayout";

export default function lefCategoriesPage() {
  return (
    <>
      <UserAdminLayout>
        <LefCategoriesComponent />
      </UserAdminLayout>
    </>
  );
}
