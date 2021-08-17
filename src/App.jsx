import React from "react";

//components
import AddContact from "./components/Contact/AddContact.component";
import ContactList from "./components/Contact/ContactList.component";
import Header from "./components/Header/Header.component";

function App() {
  const contact = [
    {
      id: "1",
      name: "Dhana",
      email: "dd@gmail.com",
    },
    {
      id: "2",
      name: "joe",
      email: "dd@gmail.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
