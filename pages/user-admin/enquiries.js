import React from "react";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
import EnquiresComponent from "../../components/UserAdmin/Enquires/EnquiresComponent";

export default function Enquiries() {
  return (
    <div>
      <UserAdminLayout>
        <EnquiresComponent />
      </UserAdminLayout>
    </div>
  );
}
