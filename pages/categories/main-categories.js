import React from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import MainCategoriesComponent from "../../components/categories/MainCategoriesComponent";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";

export default function MainCategoriesPage() {
  return (
    <>
      <div>
        <UserAdminLayout>
          <MainCategoriesComponent />
        </UserAdminLayout>
      </div>
    </>
  );
}
