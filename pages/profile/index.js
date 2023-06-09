import React, { useContext } from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import CompanyListComponent from "../../components/CompanyProfile/CompanyListComponent/CompanyListComponent";
import { BusinessContext } from "../../ContaxtApi/BusinessContaxApi";
import { getAllBusinessList } from "../../Actions/UserAuth/BusinessAction";
import UserAdminLayout from "../../components/UserAdmin/UserAdminLayout";

export default function CompaniesList({ initialBussinesList }) {
  const { setlistedBusiness } = useContext(BusinessContext);

  setlistedBusiness(initialBussinesList);
  return (
    <div>
      <UserAdminLayout>
        <CompanyListComponent />
      </UserAdminLayout>
    </div>
  );
}

// Get Static Props
export async function getServerSideProps(context) {
  try {
    const result = await getAllBusinessList();

    return {
      props: {
        initialBussinesList: result.data.listsOfBusiness,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialBussinesList: {},
      },
    };
  }
}
