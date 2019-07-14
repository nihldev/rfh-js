import React from "react";

import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Site = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Site;
export { Header, Content, Contact, Footer };
