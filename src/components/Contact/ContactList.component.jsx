import React from "react";
import ContactCard from "./ContactCard.component";

const ContactList = (props) => {
  const delteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((data) => {
    return <ContactCard contact={data} clickHandler={delteContactHandler} />;
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
