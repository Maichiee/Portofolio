import heroImage from "./../assets/images/hero-image.svg"

export default function Header(){
    return(
        <>
        <div className={"main-container"}>
            <div className={"nav"}>
                <div className={"logo"}>
                    <a href="/">MAMMM</a>
                </div>

                <nav>
                    <ul>
                        <li><a href="#"> About Me </a></li>
                        <li><a href="#"> Portofolio </a></li>
                        <li><a href="#skill"> Skills </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                </nav>

                <div className={"burger"}>
                    <div className={"line1"}></div>
                    <div className={"line2"}></div>
                    <div className={"line3"}></div>
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