import { FunctionalComponent } from "react";

import Site, { Contact, Content, Footer, Header } from "./site";

interface allComponents {
  Site: FunctionalComponent;
  Contact: FunctionalComponent;
  Content: FunctionalComponent;
  Footer: FunctionalComponent;
  Header: FunctionalComponent;
}

const components: allComponents = { Site, Contact, Content, Footer, Header };

// Site components
export { Site, Contact, Content, Footer, Header };
export default components;
