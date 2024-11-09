import { ReactNode } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

function CMS({}: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable />
        </div>
      </div>
    </div>
  );
}

export default CMS;
