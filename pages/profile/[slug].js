import React, { useContext } from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import CompanyProfile from "../../components/CompanyProfile/Sections/CompanyProfile";
import { getBusinessDetailsBySlugAction } from "../../Actions/UserAuth/BusinessAction";
import { BusinessContext } from "../../ContaxtApi/BusinessContaxApi";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";

export default function CompanyProfilePage({ initialBusinessList }) {
  const { setbusinessCompleteDetails } = useContext(BusinessContext);

  setbusinessCompleteDetails(initialBusinessList);

  return (
    <>
      <UserAdminLayout>
        <CompanyProfile />
      </UserAdminLayout>
    </>
  );
}

// Get Static Props
export async function getServerSideProps(context) {
  try {
    const { slug } = context.params;
    const result = await getBusinessDetailsBySlugAction(slug);
    return {
      props: {
        initialBusinessList: result.data.business,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialBusinessList: {},
      },
    };
  }
}
