import React from "react";
import charIcon from "../../public/admin-images/chart-success.png";
import threedots from "../../public/admin-images/dots.png";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";

export default function SideStatsCard() {
  return (
    <div className={`card `}>
      <div className={`card-body`}>
        <div
          className={`card-title d-flex align-items-start justify-content-between`}
        >
          <div className={`avatar flex-shrink-0`}>
            <Image src={charIcon} width={40} alt="icon-image" />
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <Image src={threedots} width={20} alt="icon-image" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <span className="fw-semibold d-block mb-1">New Users</span>
        <h3 className="card-title mb-2">12,628</h3>
        <small className="text-success fw-semibold">
          <i className="bx bx-up-arrow-alt"></i> +72.80%
        </small>
      </div>
    </div>
  );
}
