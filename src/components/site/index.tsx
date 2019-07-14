import React, { FunctionalComponent } from "react";

import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Site: FunctionalComponent = () => {
  return (
    <div>
      <Header />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
};

export default Site;
export { Contact, Content, Footer, Header };
