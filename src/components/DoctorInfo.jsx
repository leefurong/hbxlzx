import React from 'react'


export default ({ info }) => {
  const { avatar, name, description, tags } = info
  return (<div className="doctor-info">
    <img src={avatar} className="round-icon" alt="" />
    <div className="doctor-name">{name}</div>
    <div className="doctor-description">{description}</div>
    <div className="tag-container">
      {tags.map(tag => <div className="doctor-tag" key={tag}>{tag}</div>)}
    </div>
  </div>)
}