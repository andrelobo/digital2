import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTATO' /> <br />
            <br />
            <Title title="Vamos começar agora mesmo!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-details'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+55 92 98593-0954</h3>
                  <span>Atendimento: Seg - Sex 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Manaus, Amazonas - Brasil</h3>
                 
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>loboandre@hotmail.com</h3>
                  <span>Nos envie uma mensagem a qualquer momento!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>loboandre@hotmail.com</h3>
                  <span>Carreira na Lobodev Tech</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Faça uma consulta online' />
              <p className='desc-p'>
                Tem perguntas? Ideias? Preencha o formulário abaixo para obter
                nossa proposta.
              </p>

             
              <div className="cta-section">
  <button
    className="button-primary"
    onClick={() => window.open('https://wa.me/5592985930954?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento', '_blank')}
  >
    Faça um orçamento
  </button>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
