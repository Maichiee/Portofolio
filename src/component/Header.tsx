import heroImage from "./../assets/images/hero-image.svg"

export default function Header(){
    return(
        <>
        <div className="main-container">
            <div className="nav">
                <div className="logo">
                    <a href="/">IH</a>
                </div>

                <nav>
                    <ul>
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#portofolio">Portofolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            <a href="#" target="_blank">
                                <button className="btn">Click Me</button>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>

            <section id="hero">
                <div className="hero-left">
                    <h3 className="pre-title">My name is</h3>
                    <h1 className="hero-name">Imam <span>Harits</span></h1>
                    <p>
                    "Hello! I’m a web developer passionate about building responsive, intuitive, and scalable web applications. With experience in HTML, CSS, React. I’m dedicated to delivering the best solutions for user needs."
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