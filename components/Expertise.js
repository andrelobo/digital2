import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
        <div className='heading-title'>
  <Title title='Nossa Experiência' />
  <p>Com anos de experiência em desenvolvimento de software, nossa equipe domina as mais modernas tecnologias de back-end e front-end. Criamos soluções escaláveis e de alta performance, integrando arquiteturas robustas no back-end com interfaces dinâmicas e responsivas no front-end, garantindo uma experiência completa e eficiente para nossos clientes.</p>
</div>

          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='saiba mais' />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;
