import React from "react";
import PageLayOut from "../../components/layouts/PageLayOut";
import CompanyListComponent from "../../components/CompanyProfile/CompanyListComponent/CompanyListComponent";

export default function CompaniesList() {
  return (
    <div>
      <PageLayOut>
        <CompanyListComponent />
      </PageLayOut>
    </div>
  );
}
