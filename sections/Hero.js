import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='< Desenvolvimento Web />'  className='logobg' />          

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='DESENVOLVIMENTO E INTEGRAÇÃO DE API`S' /> <span>.</span>
            <TitleSm title='INTEGRAÇÃO E SERVIÇOS EM NUVEM' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='A fábrica de software para suas soluções digitais.' />
            <p className='desc-p'>
  Transformamos idéias de negócios em soluções digitais inteligentes e inovadoras. Nossa equipe é especializada em criar produtos que não só atendem às necessidades do mercado, mas também antecipam tendências tecnológicas. Com uma abordagem centrada no cliente, desenvolvemos sistemas robustos e escaláveis, integrando as mais modernas tecnologias de back-end e front-end para oferecer resultados de alto impacto e qualidade. A nossa experiência abrange desde o desenvolvimento de software personalizado até a criação de plataformas digitais complexas, sempre com o foco em eficiência e inovação.
</p>          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
     
      <ShowCase />
      <Brand />

     
    </>
  );
};

export default Hero;


// how to resize this hero-title to mobile apps ?