import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

type Props = {};

function ContactForm({}: Props) {
  const methods = useForm();
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
