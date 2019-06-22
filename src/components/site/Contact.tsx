import React, { FunctionalComponent } from "react";

const mapStyle = {
  border: 0
};

const CancunMap: FunctionalComponent = () => {
  return (
    <article className="tab">
      <p>Av. Torcasita Mza. 3 Lote 41 Local 4 Supermanzana 66</p>
      <p>
        <a href="tel:9988840783">[998]884 0783</a>
      </p>
      <p>
        <a href="mailto:cancun@refaccionariadelhogar.mx">
          cancun@refaccionariadelhogar.mx
        </a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3720.496278442603!2d-86.8318669!3d21.1724355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff14df1cebbd%3A0xb4e7bfedd0acce24!2sRefaccionaria+del+Hogar!5e0!3m2!1sen!2smx!4v1435794237440"
        width="600"
        height="450"
        frameBorder="0"
        style={mapStyle}
        title="Cancun"
        allowFullScreen
      ></iframe>
    </article>
  );
};

const MeridaMap: FunctionalComponent = () => {
  return (
    <article className="tab">
      <p>Av. Cupules No.96D entre calle 10 y calle 12 col. García Ginerés</p>
      <p>
        <a href="tel:9999200516">[999]920 0516</a>
      </p>
      <p>
        <a href="mailto:merida@refaccionariadelhogar.mx">
          merida@refaccionariadelhogar.mx
        </a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.998092361518!2d-89.62932408506798!3d20.992713586017793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5673fe64c91a1f%3A0xfe3bbf64da09c1db!2sRefaccionaria+del+Hogar!5e0!3m2!1sen!2s!4v1506620480614"
        width="600"
        height="450"
        frameBorder="0"
        style={mapStyle}
        title="Merida"
        allowFullScreen
      ></iframe>
    </article>
  );
};

const Contact: FunctionalComponent = () => {
  return (
    <section id="contacto" className="tab-area tabs-target">
      <span className="target-fix" id="tabC"></span>
      <span className="target-fix" id="tabB"></span>
      <a className="tab-link" href="#tabA">
        Sucursal Cancún
      </a>
      <a className="tab-link" href="#tabB">
        Sucursal Mérida
      </a>
      <CancunMap />
      <MeridaMap />
    </section>
  );
};

export default Contact;
