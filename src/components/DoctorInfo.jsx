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
        onClick={() => { window.location.replace(supportURL); }}>
        {name}<Brief>{intro}</Brief>

      </Item>
    </List>
  </div>)
}