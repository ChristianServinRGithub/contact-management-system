import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  children: ReactNode;
  name: string;
};

function Input({ name, children }: Props) {
  const { register } = useFormContext();
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type='text'
        id={name}
        className="form-control"
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}

export default Input;
