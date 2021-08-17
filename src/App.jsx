import React, { useState, useEffect } from "react";

//components
import AddContact from "./components/Contact/AddContact.component";
import ContactList from "./components/Contact/ContactList.component";
import Header from "./components/Header/Header.component";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveConntact = JSON.parse(localStorage.getItem("contactApp"));
    if (retriveConntact) setContacts(retriveConntact);
  }, []);

  useEffect(() => {
    localStorage.setItem("contactApp", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
