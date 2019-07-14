import React from "react";

const MenuOptions = (): JSX.Element => {
  return (
    <div className="menu">
      <input type="checkbox" name="toggle" id="toggle" className="toggle" />
      <label htmlFor="toggle"></label>
      <ul className="menul">
        <li className="home">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="contacto">
          <a href="#contacto">Contacto</a>
        </li>
        <li className="facebook">
          <a
            href="https://www.facebook.com/RefaccionariaDelHogar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

const Menu = (): JSX.Element => {
  return (
    <nav>
      <div className="wrap">
        <h1>Refaccionaria del Hogar</h1>
        <MenuOptions />
      </div>
    </nav>
  );
};

const Jumbotron = (): JSX.Element => {
  return (
    <div className="slogan">
      <h2>Dale un segundo aire</h2>
      <h2>a tus electrodom&eacute;sticos del hogar</h2>
    </div>
  );
};

export default (): JSX.Element => {
  return (
    <section id="inicio" className="inicio">
      <div>
        <Menu />
        <Jumbotron />
      </div>
    </section>
  );
};
