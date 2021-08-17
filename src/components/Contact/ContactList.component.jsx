import React from "react";

const ContactList = (props) => {
  console.log(props.contact);
  const renderContactList = props.contact.map((contact) => {
    return (
      <div class="card mb-3 outline w-50" key={contact.id}>
        <div class="card-header">
          <h5>{contact.name}</h5>
          <i>{contact.email}</i>
        </div>
        <div class="card-body">
          <p class="card-text d-flex justify-content-end">
            <i className="fas fa-trash-alt"></i>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-5">
      <div>
        <h4>Contact List</h4>
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
