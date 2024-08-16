import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Fábrica de' /> <br />
            <br />
            <Title title='A fábrica de software para suas soluções digitais.' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Transformando suas ideias de negócios em produtos digitais inteligentes desde 2020' />
              <p className='desc-p'>
  Transformamos ideias de negócios em soluções digitais inteligentes e inovadoras. Nossa equipe é especializada em criar produtos que não só atendem às necessidades do mercado, mas também antecipam tendências tecnológicas. Com uma abordagem centrada no cliente, desenvolvemos sistemas robustos e escaláveis, integrando as mais modernas tecnologias de back-end e front-end para oferecer resultados de alto impacto e qualidade. A nossa experiência abrange desde o desenvolvimento de software personalizado até a criação de plataformas digitais complexas, sempre com o foco em eficiência e inovação.
</p>              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Anos de experiência</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Casos de sucesso</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Prêmios da indústria</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Imagem' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Imagem' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Nossa missão' />
              <br />
              <p className='misson-p'>Fusce fringilla justo vel dui consectetur, fringilla maximus ante malesuada. Suspendisse facilisis nisl augue, ut sollicitudin lectus ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse vitae officia nostrum facere. Fugiat voluptates, expedita dolore at perferendis quae libero fuga consequatur veniam, eius non fugit nulla vitae?</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
