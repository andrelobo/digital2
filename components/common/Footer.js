import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
            <img src="/images/lobodev_logo.png" alt="logo" />
              
              <span>
              Perguntas? Entre em contato conosco <br /> de segunda a sexta, das 9h às 18h.
              </span>
              <br />
              <br />
              <h3>+5592985930954</h3>
              <br />
              <button className='button-primary'>Faça um orçamento</button>
            </div>
            <ul>
              <h3>Empresa</h3>
              <li>
                <Link href='/'>Sobre a empresa</Link>
              </li>
              
              
              <li>
                <Link href='/'>Demo design system</Link>
              </li>
              <li>
                <Link href='/'>Contato</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVIÇOS</h3>
  <li>
  <Link href='/'>Design e Desenvolvimento Web</Link>
</li>

<li>
  <Link href='/'>E-Commerce</Link>
</li>

<li>
  <Link href='/'>Soluções de Software Personalizadas</Link>
</li>
<li>
  <Link href='/'>Integração e Serviços em Nuvem</Link>
</li>
<li>
  <Link href='/'>Desenvolvimento e Integração de APIs</Link>
</li>
<li>
  <Link href='/'>Análise de Dados e Inteligência de Negócios</Link>
</li>
<li>
   <Link href='/'>Modernização de Sistemas Legados</Link>
</li>

            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 LOBODEV TECH ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>LOBODEV TECH</span>
              <span> &nbsp; | &nbsp; </span>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
