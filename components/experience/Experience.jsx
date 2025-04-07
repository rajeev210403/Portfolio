/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">

        <div className="exp__content">
                <div>
                    {/* <i className="uil uil-web-grid exp__icon"></i> */}
                    <img className="exp__icon" src="../../src/assets/rashmiLogo.jpg" alt="" />
                    <h3 className="exp__title">Product Coordinator <br /> Intern <br /> </h3>
                </div>

                <div>
                    <span className="exp__comp">Rashmi Group</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Product coordinator Intern <br /> Jan'25 - Present </h3>
                        <p className="exp__modal-description">Working as a Product Coordinator at Kalgudi Digital.
                            Providing quality work to company.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info"> Built a real-time ERP analytics dashboard webpage by fetching live data from Google Sheets into a centralized manage
                                ment view.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Coordinating the Workday HCM implementation, ensuring smooth transition and integration.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Gathered requirements & designed process flows for HRMS module by collaborating with the HR team.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    {/* <i className="uil uil-web-grid exp__icon"></i> */}
                    <img className="exp__icon" src="../../src/assets/kalgudiLogo.jpeg" alt="" />
                    <h3 className="exp__title">SDE <br /> Intern <br /> </h3>
                </div>

                <div>
                    <span className="exp__comp">Kalgudi Digital</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer Intern <br /> May'24 - Aug'24🧑🏻‍💻</h3>
                        <p className="exp__modal-description">Worked as a Software Developer Intern at Kalgudi Digital.
                            Providing quality work to company.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info"> Developed app screens using Angular.js.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developed dynamic UI functionality for customizable form generation significantly reduces the time required to create desirable
                                forms.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Designed a prototype dashboard for visualizing the company statistics.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    {/* <i className="uil uil-arrow exp__icon"></i> */}
                    <img className="exp__icon" src="../../src/assets/rishaLogo.jpeg" alt="" />
                    <h3 className="exp__title">Research <br /> Intern <br/> </h3>
                </div>

                <div>
                    <span className="exp__comp">RISHA Lab</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Research & development Intern <br /> Aug'24 - Dec'24</h3>
                        <p className="exp__modal-description">Worked at RISHA Lab as Intern for 3 months.
                            Research and developing tools for optimization.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developing a bi-directional traceability framework using LLM and knowledge graph .</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info"> Tool to strengthen trace links
                                between natural language requirements, design, and software artifacts like bug issues and source code.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Reduces time to visualizing the links between different software artifacts in whole software lifecycle.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience