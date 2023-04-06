import React, { useContext, useEffect } from "react";
import SuperAdminLayout from "../../SuperAdminComponentnts/SuperAdminLayout";
import NewUsers from "../../SuperAdminComponentnts/NewUsers/NewUsers";
import SuperAdminPrivate from "../../Actions/adminAuth/SuperAdminPrivate";
import { useRouter } from "next/router";
import { AppUtilsContext } from "../../ContaxtApi/AppUtilsContaxApi";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";
export default function SuperAdmin() {
  const { prtectLoading, setprtectLoading } = useContext(AppUtilsContext);
  return (
    <>
      {prtectLoading ? (
        <>
          <div>
            <h1>loading</h1>
          </div>
        </>
      ) : (
        <>
          <SuperAdminPrivate>
            <UserAdminLayout>
              <NewUsers />
            </UserAdminLayout>
          </SuperAdminPrivate>
        </>
      )}
    </>
  );
}
