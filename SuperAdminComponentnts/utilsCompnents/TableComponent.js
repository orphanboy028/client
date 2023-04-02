import React from "react";
import style from "../css/Utils.module.css";
import { Table } from "react-bootstrap";

const data = [
  { id: 1, name: "John Doe", age: 25, email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", age: 30, email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", age: 45, email: "bobsmith@example.com" },
];

export default function TableComponent() {
  return (
    <>
      <div className={`card ${style.TableCard_Resposive}`}>
        <div className={`${style.table_header}`}>
          <h3> New Users</h3>
        </div>
        <Table responsive="sm" striped bordered hover size="sm">
          <thead className={`${style.table_Header}`}>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row.id}>
                  <td className="text-center">{row.id}</td>
                  <td className="text-center">{row.name}</td>
                  <td className="text-center">{row.age}</td>
                  <td>{row.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
