import React from "react";
import UserAdminLayout from "../../../../../components/UserAdmin/UserAdminLayout";
import CreatedEnquiresComponent from "../../../../../components/UserAdmin/Enquires/CreatedEnquires/CreatedEnquiresComponent";

export default function UserEnquiresListPage() {
  return (
    <>
      <UserAdminLayout>
        <CreatedEnquiresComponent />
      </UserAdminLayout>
    </>
  );
}
