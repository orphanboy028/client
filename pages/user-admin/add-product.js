import React from "react";
import UserAdminDashBoard from ".";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
import AddProductComponenet from "../../components/UserAdmin/AddProducts/AddProductComponenet";

export default function AddProduct() {
  return (
    <div>
      <UserAdminLayout>
        <AddProductComponenet />
      </UserAdminLayout>
    </div>
  );
}
