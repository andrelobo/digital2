import Banner from "@/components/Banner";

import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Fábrica de" /> <br />
            <br />
            <Title
              title="A fábrica de software para suas soluções digitais."
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Transformando suas ideias de negócios em produtos digitais inteligentes desde 2020" />
              <p className="desc-p">
               Transformamos ideias em soluções digitais inovadoras. Nossa equipe cria produtos que atendem ao mercado e antecipam tendências. Desenvolvemos sistemas robustos e escaláveis, unindo tecnologias modernas de back-end e front-end para garantir resultados de alta qualidade, desde softwares personalizados até plataformas digitais complexas, sempre focados em eficiência e inovação.
              </p>{" "}
             
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Imagem"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Imagem"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Nossa missão" />
              <br />
              <p className="mission-p">
                Nossa missão é transformar ideias em soluções digitais
                eficientes e inovadoras, entregando valor e resultados para
                nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
