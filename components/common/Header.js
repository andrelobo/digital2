import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
            
            <img src="/images/lobodev_logo.png" alt="logo" />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Agência
            </Link>
            
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Serviços
            </Link>      
            
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contato
            </Link>
            <button
  className='button-primary'
  onClick={() => window.open('https://wa.me/5592985930954?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria', '_blank')}
>
  Agende uma consultoria
</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
