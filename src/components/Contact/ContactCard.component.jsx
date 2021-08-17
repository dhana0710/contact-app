import React from "react";

const CardContact = (props) => {
  return (
    <div className="card mb-3 outline  w-75" key={props.contact.id}>
      <div className="card-header">
        <div className="d-flex justify-content-start align-items-stretch ">
          <div className="user mr-3">
            <img
              src="https://raw.githubusercontent.com/dmalvia/React_Tutorial_Contact_Manager_App/master/src/images/user.png"
              alt="img"
              class="rounded me-2 img"
            />
          </div>
          <div>
            <h5>
              <strong>{props.contact.name}</strong>
            </h5>
            <p>{props.contact.email}</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text d-flex justify-content-end">
          <i className="fas fa-trash-alt h4" style={{ color: "red" }}></i>
        </p>
      </div>
    </div>
  );
};

export default CardContact;
