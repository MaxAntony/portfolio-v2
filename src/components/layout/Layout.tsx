import { FC, Fragment } from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};
