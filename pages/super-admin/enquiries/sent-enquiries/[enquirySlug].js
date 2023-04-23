import React from "react";
import SuperAdminLayout from "../../../../SuperAdminComponentnts/SuperAdminLayout";
import SentEnquiresDetailsComponent from "../../../../SuperAdminComponentnts/enquiriesComponent/sentEnquiriesComponent/SentEnquiresDetailsComponent";

export default function SentEnquiriesDetailsPage() {
  return (
    <div>
      <SuperAdminLayout>
        <SentEnquiresDetailsComponent />
      </SuperAdminLayout>
    </div>
  );
}
