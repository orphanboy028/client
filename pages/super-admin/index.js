import React from "react";
import SuperAdminLayout from "../../SuperAdminComponentnts/SuperAdminLayout";
import NewUsers from "../../SuperAdminComponentnts/NewUsers/NewUsers";

export default function SuperAdmin() {
  return (
    <>
      <SuperAdminLayout>
        <NewUsers />
      </SuperAdminLayout>
    </>
  );
}
