import { ReactNode, useState } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import Header from "./Header";
import { Contact } from "../schemas/ContactSchema";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

function CMS({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const addContact = (contact: Contact) =>
    setContacts([{ ...contact, id: Math.random().toString() }, ...contacts]);

  const deleteContact = (id: string) =>
    setContacts(contacts.filter((c) => c.id != id));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Footer>
            <small>Created by Chris SR 2024</small>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default CMS;
