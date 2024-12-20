// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Coursework from './Coursework';
import LanguagesDatabases from './LanguagesDatabases';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <LanguagesDatabases />
        <Frontend />
        <Coursework />
      </div>
    </section>
  )
}

export default Skills