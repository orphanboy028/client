import React from "react";
import UserAdminLayout from "../../../../components/UserAdmin/UserAdminLayout";
import ProductEnquireDetails from "../../../../components/UserAdmin/Enquires/ProductEnquires/ProductEnquireDetails/ProductEnquireDetails";

export default function ProductEnquireDetailsPage() {
  return (
    <>
      <UserAdminLayout>
        <div>
          <ProductEnquireDetails />
        </div>
      </UserAdminLayout>
    </>
  );
}
