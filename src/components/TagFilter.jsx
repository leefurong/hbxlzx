import React from 'react'
import Tag from './Tag'
import { Icon } from 'antd-mobile'
import "./TagFilter.css"

export class TagFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  render() {
    return (<div className="tags">
      <div className="bar card">
        <div className="sm grey">您是:  </div>
        <Icon type="right" size="xxs" />
        <Tag tag={this.props.currentTag} />
        <Icon type="down" size="xxs" />
      </div>
      {"*ABCDEF".split("").map(
        (tagName) =>
          (<a href={"/doctors/" + tagName}>
            <Tag tag={tagName} />
          </a>))}
    </div>)
  }
}

export default TagFilter