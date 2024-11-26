import image1 from "./../assets/images/Portofolio/Sihalal2.png"
import image2 from "./../assets/images/Portofolio/Purwadhika.png"
import image3 from "./../assets/images/Portofolio/Project Website.jpg"

export default function Portofolio(){
    return(
        <>
            <div id="portofolios">
                <div className="portofolios main-container">
                    <h3 className="pre-title">My Works</h3>
                    <h1 className="section-title">Featured Portofolios</h1>

                    <div className="grid-3">
                        <div className="portofolio">
                            <div className="portofolio-cover">
                                <img src={image1} alt="Portofolio 1" />
                            </div>

                            <div className="portofolio-info">
                                <div className="portofolio-title">
                                    <h4>Pendamping Halal</h4>
                                    <a href="/" className="portofolio-link">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                    </svg>
                                    </a>
                                </div>
                            <div className="portofolio-tags">
                                <div>React</div>
                                <div>Tailwind</div>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!
                            </p>

                            </div>
                        </div>

                        <div className="portofolio">
                            <div className="portofolio-cover">
                                <img src={image2} alt="Portofolio 2" />
                            </div>

                            <div className="portofolio-info">
                                <div className="portofolio-title">
                                    <h4>Mini Project Purwadhika</h4>
                                    <a href="/" className="portofolio-link">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                    </svg>
                                    </a>
                                </div>
                            <div className="portofolio-tags">
                                <div>Viu</div>
                                <div>ContentFul</div>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!
                            </p>

                            </div>
                        </div>

                        <div className="portofolio">
                            <div className="portofolio-cover">
                                <img src={image3} alt="Portofolio 3" />
                            </div>

                            <div className="portofolio-info">
                                <div className="portofolio-title">
                                    <h4>Dashbord Admin</h4>
                                    <a href="/" className="portofolio-link">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                    </svg>
                                    </a>
                                </div>
                            <div className="portofolio-tags">
                                <div>React</div>
                                <div>Materialieze</div>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!
                            </p>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}