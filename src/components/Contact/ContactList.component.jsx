import React from "react";
import ContactCard from "./ContactCard.component";

const ContactList = (props) => {
  let renderContactList = props.contacts.map((data) => {
    return <ContactCard contact={data} />;
  });
  return (
    <>
      <div className="container mt-5">
        <h4>Contact List</h4>
        {renderContactList}
      </div>
    </>
  );
};

export default ContactList;
