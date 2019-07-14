import React from "react";

import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

interface SiteComponents {
  Header: JSX.Element;
  Content: JSX.Element;
  Contact: JSX.Element;
  Footer: JSX.Element;
}

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
export { Site, Header, Content, Contact, Footer };
