import React from 'react'
import Tag from './Tag.jsx'


export default ({ info }) => {
  const { avatar, name, intro, tags, supportURL } = info
  return (<div className="doctor-info card">
    <a href={supportURL}>
      <img src={avatar} className="round-icon" alt="" />
      <div className="doctor-name">{name}</div>
      <div className="doctor-intro">{intro}</div>
    </a>
    <div className="tag-container">
      {tags.split('').map(tag => <Tag tag={tag} key={tag} />)}
    </div>
  </div>)
}