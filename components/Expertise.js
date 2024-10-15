import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Nossa Experiência" />
            <p>
              Desenvolvemos aplicações como sistemas de gestão, plataformas de
              e-commerce e apps mobile, sempre focando em soluções escaláveis e
              de alto desempenho. Integramos back-ends robustos com interfaces
              dinâmicas e responsivas, proporcionando uma experiência eficiente
              e completa para nossos clientes.
            </p>
          </div>

          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
