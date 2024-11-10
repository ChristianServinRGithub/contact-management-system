import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  children: ReactNode;
  name: string;
};

function Input({ name, children }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type="text"
        id={name}
        className="form-control"
        placeholder="Escribe tu nombre"
      />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}

export default Input;