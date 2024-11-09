import { Contact } from "../schemas/ContactSchema";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr
            onClick={() => onClick(contact.id)}
            style={{ cursor: "pointer" }}
            key={contact.id}
          >
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
