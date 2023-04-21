import React from "react";
import UserAdminLayout from "../../../../components/UserAdmin/UserAdminLayout";
import SendEnquiresComponent from "../../../../components/UserAdmin/Enquires/SendEnquires/SendEnquiresComponent";

export default function SendEnquires() {
  return (
    <>
      <UserAdminLayout>
        <SendEnquiresComponent />
      </UserAdminLayout>
    </>
  );
}
