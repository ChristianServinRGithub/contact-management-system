import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { Contact, contactSchema } from "../schemas/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function ContactForm({}: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema)
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre:</Input>
        <Input name="lastname">Apellido:</Input>
        <Input name="email">Correo:</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
