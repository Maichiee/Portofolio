import heroImage from "./../assets/images/hero-image.svg"
import { useRef } from "react";

export default function Header(){

    const navRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);
  
    const toggleNav = () => {
      if (navRef.current && burgerRef.current) {
        navRef.current.classList.toggle("nav-active");
        burgerRef.current.classList.toggle("toggle-burger");
      }
    };
  

    return(
        <>
        <div className="main-container">
            <div className="nav">
                <div className="logo">
                    <a href="/">IH</a>
                </div>

                <nav className="nav-active" ref={navRef}>
                    <ul>
                        <li><a href="#aboutmes">About Me</a></li>
                        <li><a href="#portofolios">Portofolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            <a href="#" target="_blank">
                                <button className="btn">RESUME</button>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="burger toggle-burger" ref={burgerRef} onClick={toggleNav}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>

            <section id="hero">
                <div className="hero-left">
                    <h3 className="pre-title">My name is</h3>
                    <h1 className="hero-name">Imam <span>Harits</span></h1>
                    <p>
                    "Hello! I am a web developer passionate about building responsive, intuitive, and scalable web applications. With experience in HTML, CSS, React. I’m dedicated to delivering the best solutions for user needs."
                    </p>
                </div>
                
                <div className="hero-right">
                    <img src={heroImage} alt="hero images" />
                </div>
            </section>
        </div>
        </>     
    )
}