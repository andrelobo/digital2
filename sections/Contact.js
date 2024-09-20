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
                  <h3>hr@dream-theme.com</h3>
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

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Nome</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Seu orçamento</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Prazo</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>CONTE-NOS UM POUCO SOBRE SEU PROJETO*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
