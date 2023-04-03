import React from "react";
import style from "../css/Utils.module.css";
import { Table, Button } from "react-bootstrap";
import { compareAsc, format } from "date-fns";
import verifiedIcon from "../../public/app-static-images/verified.png";
import pending from "../../public/app-static-images/remove.png";
import Image from "next/image";

export default function TableComponent({ allusers }) {
  console.log(allusers);
  return (
    <>
      <div className={`card ${style.TableCard_Resposive}`}>
        <div className={`${style.table_header}`}>
          <h3> New Users</h3>
        </div>
        <Table responsive="sm" striped bordered hover size="sm">
          <thead className={`${style.table_Header}`}>
            <tr>
              <th className="text-center">S.NO</th>
              <th className="text-center">Date</th>
              <th className="text-center">Name</th>
              <th className="text-center">Mobile Number</th>
              <th>Email</th>
              <th className="text-center">@verify</th>
              <th className="text-center">User Profile</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, i) => {
              return (
                <>
                  <tr key={user._id} id={user._id}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">
                      {format(new Date(user.createdAt), "dd-MM-yyyy")}
                    </td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td className="text-center">
                      {user.isActive ? (
                        <Image
                          src={verifiedIcon}
                          width={20}
                          alt="verified-email"
                        />
                      ) : (
                        <>
                          <Image src={pending} width={20} alt="pending email" />
                        </>
                      )}
                    </td>
                    <td className="text-center">
                      <Button variant="primary">User Profile</Button>
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
