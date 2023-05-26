import React from "react";
import UserAdminDashBoard from ".";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
import AddProductComponenet from "../../components/UserAdmin/AddProducts/AddProductComponenet";
import Userprivate from "../../Actions/UserPrivate/Userprivate";

export default function AddProduct() {
  return (
    <div>
      <Userprivate>
        <UserAdminLayout>
          <AddProductComponenet />
        </UserAdminLayout>
      </Userprivate>
    </div>
  );
}
