/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <h2 className="work__des">{item.description}</h2>
        <div className="work__links">
        {item.demo && (
          <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {item.demo && (
          <span className="work__divider">|</span>
        )}
        {item.live && (
          <a href={item.live} className="work__button" target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
        {item.live && (
          <span className="work__divider">|</span>
        )}
        {item.github && (
          <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default WorksItems