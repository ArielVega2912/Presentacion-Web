import React from 'react';

import Cabecera from "./components/layouts/1_cabecera";
import Medio from "./components/layouts/2_medio";
import Pie from "./components/layouts/3_pie";

const App = () => {
  return (
    <>
      <header id='inicio'>
        <Cabecera/>
      </header>

      <section id='skills' className="medio">
         <Medio/>  
      </section>
      <footer id='contacto'>
        <Pie/>
      </footer>
    </>
  );
}

export default App;
