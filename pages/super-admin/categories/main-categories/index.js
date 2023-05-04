import React from "react";
import SuperAdminLayout from "../../../../SuperAdminComponentnts/SuperAdminLayout";

import AdminMainCategioriesComponent from "../../../../SuperAdminComponentnts/categories/MainCategories/AdminMainCategioriesComponent";

export default function MainCategoriesPage() {
  return (
    <div>
      <SuperAdminLayout>
        <AdminMainCategioriesComponent />
      </SuperAdminLayout>
    </div>
  );
}
