import React from "react";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
import ProfileComponent from "../../components/UserAdmin/Profile/ProfileComponent";
import Userprivate from "../../Actions/UserPrivate/Userprivate";

export default function UserAdminDashBoard() {
  return (
    <>
      <Userprivate>
        <UserAdminLayout>
          <ProfileComponent />
        </UserAdminLayout>
      </Userprivate>
    </>
  );
}
