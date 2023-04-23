import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { EnquiryContext } from "../../../ContaxtApi/EnquiryContaxApi";
import { format, formatRelative } from "date-fns";
import Link from "next/link";

export default function SentEnqueryTable() {
  const { ListOfSentEnquiries } = useContext(EnquiryContext);

  return (
    <>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>EnquiryTo</th>
              <th>Sent User</th>
              <th>Date/Time</th>
              <th>Message</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {ListOfSentEnquiries.map((enquries) => {
              const formattedDate = format(
                new Date(enquries.createdAt),
                "d-MMMM-yyyy, h:mm a"
              );
              const relativeTime = formatRelative(
                new Date(enquries.createdAt),
                new Date()
              );
              return (
                <>
                  <tr>
                    <td>1</td>
                    <td>{enquries?.enquiryTo}</td>
                    <td>{enquries?.user.businessDetails.CompanyName} </td>
                    <td>{relativeTime}</td>
                    <td>{enquries?.EnquiryMessage}</td>
                    <td>
                      <Link
                        href={`/super-admin/enquiries/sent-enquiries/${enquries?.enquirySlug}`}
                      >
                        Enquires Deatails
                      </Link>
                    </td>
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
