import React from "react";
import UserAdminLayout from "../../../../components/UserAdmin/UserAdminLayout";
import ProductEnquiresComponent from "../../../../components/UserAdmin/Enquires/ProductEnquires/ProductEnquiresComponent";

export default function ProductEnquiresPage() {
  return (
    <>
      <UserAdminLayout>
        <div>
          <ProductEnquiresComponent />
        </div>
      </UserAdminLayout>
    </>
  );
}
