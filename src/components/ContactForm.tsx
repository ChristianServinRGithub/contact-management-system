import Button from "./Button";

type Props = {};

function ContactForm({}: Props) {
  return (
    <form onSubmit={() => console.log("Hola")}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre:
        </label>
        <input type="text" id="name" className="form-control" placeholder="Escribe tu nombre" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido:
        </label>
        <input type="text" id="lastname" className="form-control"placeholder="Escribe tu apellido" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo:
        </label>
        <input type="text" id="email" className="form-control" placeholder="Escribe tu Correo" />
      </div>
      <Button>Enviar</Button>
    </form>
  );
}

export default ContactForm;
