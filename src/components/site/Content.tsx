import React, { FunctionalComponent } from "react";

const Content: FunctionalComponent = () => {
  return (
    <section className="content">
      <div className="izquierda"></div>
      <div className="derecha"></div>
      <div className="container">
        <ul className="row">
          <li>
            <h3>
              <small>Reparación de </small>licuadoras
            </h3>
            <p>
              Somos expertos en reparación de licuadoras. Tenemos un equipo
              altamente capacitado para la solución de problemas con el
              funcionamiento de tu electrodoméstico. En ocasiones el problema no
              es la refacción, sino la licuadora. ¡Nosotros la reparamos por ti!
            </p>
          </li>
          <li>
            <h3>
              <small>Para tu </small>Hogar
            </h3>
            <p>
              Ofrecemos un amplia gama de repuestos para línea blanca,
              quemadores de estufa, vasos de licuadora, jarras para cafetera,
              entre otros. ¡Dinos qué necesitas y nosotros lo conseguimos!
            </p>
          </li>
          <li>
            <h3>
              <small>Servicio</small>técnico
            </h3>
            <p>
              Te ofrecemos refacciones para todo tipo de modelo y marca de
              electrodomésticos: lavadoras, microondas, secadoras entre otros.
              Contamos con un amplio inventario y variedad de piezas para su
              reparación. Nuestra promesa: si no tenemos la refacción, ¡te la
              conseguimos!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Content;
