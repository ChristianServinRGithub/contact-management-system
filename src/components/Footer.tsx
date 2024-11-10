import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function Footer({children}: Props) {
  return <div className="card-footer text-body-secondary">{children}</div>;
}

export default Footer;
