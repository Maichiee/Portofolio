export default function Aboutme(){
    return(
        <>
        <section id="aboutmes">
            <div className="aboutsmes main-container">
                <h3 className="pre-title">My Journey</h3>
                <h1 className="section-title">Skill & Education</h1>

                <div className="aboutmes-grid">
                    <div className="aboutmes-left">
                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>

                            <div className="education-info">
                                <h4 className="education-title">Daarul Quran Boarding School</h4>
                                <p>Junior High School</p>
                                <h4 className="education-years">2013-1016</h4>
                            </div>
                        </div>

                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>

                            <div className="education-info">
                                <h4 className="education-title">Al-Wildan Islamic School</h4>
                                <p>Senior High School</p>
                                <h4 className="education-years">2016-2019</h4>
                            </div>
                        </div>

                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>

                            <div className="education-info">
                                <h4 className="education-title">Islamic Religious High School</h4>
                                <p>Bachelor's degree - Sharia Economic Law</p>
                                <h4 className="education-years">2020-2024</h4>
                            </div>
                        </div>
                    </div>
                    <div className="aboutmes-right">
                    <p>
                    "As someone new to the IT field, I am actively immersing myself in front-end development by learning core technologies and frameworks. I am continuously experimenting with tools and techniques to enhance my understanding and build practical skills. Here is a summary of what I have learned so far and the areas I am currently exploring."
                    </p>

                    <div className="aboutmes-list">
                        <ul>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>HTML</li>
                            <li>Vue JS</li>
                        </ul>

                        <ul>
                            <li>CSS</li>
                            <li>Typescript</li>
                            <li>Next JS</li>
                            <li>GraphQl</li>
                            <li>Angular JS</li> 
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}