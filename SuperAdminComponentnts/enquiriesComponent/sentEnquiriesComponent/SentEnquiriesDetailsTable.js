import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import { format, formatRelative } from "date-fns";
import Link from "next/link";

export default function SentEnquiriesDetailsTable() {
  const { ApplyedUserDetails } = useContext(EnquiryContext);
  return (
    <>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Company Name</th>
              <th>Owner Name</th>
              <th>Date/Time</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <td>company Details</td>
            </tr>
          </thead>
          <tbody>
            {ApplyedUserDetails.map((applyed, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{applyed?.user?.businessDetails?.CompanyName}</td>
                    <td>{applyed?.user?.name}</td>
                    <td>{applyed?.updatedAt}</td>
                    <td>{applyed?.user?.mobileNumber}</td>
                    <td>{applyed?.user?.email}</td>
                    <td>Check Details</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
