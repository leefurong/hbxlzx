import React from 'react'
import Tag from './Tag.jsx'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default ({ info }) => {
  const { avatar, name, intro, tags, supportURL } = info
  return (<div className="doctor-info card">


  <List className="my-list">
      <Item arrow="horizontal" align="top"
        thumb={avatar}
        multipleLine
        onClick={() => { window.location.replace("https://www.baidu.com"); }}>
        {name}<Brief>{intro}</Brief>

        <div className="tag-container">
        {tags.split('').map(tag => <Tag tag={tag} key={tag} />)}
      </div>
      
  </Item>
</List>
  </div>)
}