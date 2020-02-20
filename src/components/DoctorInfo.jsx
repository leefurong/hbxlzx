import React from 'react'
import { List, Tag, Toast } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

function showMsg (content) {
  Toast.info(content, 1)
}

function getStatusClass(status) {
  switch (status) {
    case '在线':
      return 'chat-online'
    case '忙碌':
      return 'chat-busi'
    return ''
  }
}
export default ({ info }) => {
  const { avatar, name, intro, tags, supportURL, status } = info
  
  return (
    <List className="doctor-info card">
      <Item arrow="horizontal" align="top"
        thumb={avatar}
        multipleLine
        onClick={() => { if (status === '在线') {window.location = supportURL;} else {showMsg('该专家已' + (status === undefined ? '离线' : status))} }} wrap>
        {name} 
        <Tag style={{marginLeft: '15px', fontSize: '10px', height: '18px', lineHeight: '18px'}} className={ getStatusClass(status)}>{status === undefined ? '离线' : status}</Tag>
        <br/>
        <div style={{fontSize: '12px', color:'#888'}}>{intro}</div>
      </Item>
    </List>
  )
}