import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Estamos ansiosos para iniciar um novo projeto' /> <br />
            <TitleLogo title='Vamos levar o seu negócio para o próximo nível!' />
          </div>
          <div>
            <button className='button-primary'>Solicitar um retorno</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
