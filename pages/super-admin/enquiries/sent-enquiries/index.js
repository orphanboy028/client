import React from "react";
import SuperAdminLayout from "../../../../SuperAdminComponentnts/SuperAdminLayout";
import SentEnquiriesComponent from "../../../../SuperAdminComponentnts/enquiriesComponent/sentEnquiriesComponent/SentEnquiriesComponent";

export default function SentEnquiriesPage() {
  return (
    <>
      <div>
        <SuperAdminLayout>
          <SentEnquiriesComponent />
        </SuperAdminLayout>
      </div>
    </>
  );
}
