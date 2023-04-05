import React from "react";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
import ProfileComponent from "../../components/UserAdmin/Profile/ProfileComponent";

export default function UserAdminDashBoard() {
  return (
    <>
      <UserAdminLayout>
        <ProfileComponent />
      </UserAdminLayout>
    </>
  );
}
