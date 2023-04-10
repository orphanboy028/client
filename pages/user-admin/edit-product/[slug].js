import React from "react";
import UserAdminLayout from "../../../components/UserAdmin/UserAdminLayout";
import EditProductComponent from "../../../components/UserAdmin/EditProduct/EditProductComponent";

export default function EditProduct() {
  return (
    <div>
      <UserAdminLayout>
        <EditProductComponent />
      </UserAdminLayout>
    </div>
  );
}
