import React from 'react'
import Tag from './Tag'
import { Icon, Popover } from 'antd-mobile'
import "./TagFilter.css"

export class TagFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.showOptions = this.showOptions.bind(this)

    this.hidePopover = this.hidePopover.bind(this)
  }
  showOptions() {
    this.setState({ showModal: true })
  }
  hidePopover() {
    console.log("hi")
    this.setState({ showModal: false })
  }
  render() {
    return (<div className="tags">
      <div className="bar card" onClick={this.showOptions}>
        <div className="sm grey label">您是:  </div>
        <div><Icon type="right" size="xxs" color="#888888" /></div>
        <Tag tag={this.props.currentTag} />
        <div className="icon"><Icon type="down" size="xxs" color="#333333" /></div>
      </div>

      <Popover visible={this.state.showModal}
        onVisibleChange={this.handleVisibleChange}
        overlay={"*ABCDEF".split("").map(
          (tagName) =>
            (<a href={"/doctors/" + tagName} className="tag-option">
              <Tag tag={tagName} />
            </a>
            ))}>
        <div />
      </Popover>
      {this.state.showModal && <div className="mask" onClick={this.hidePopover}></div>}
    </div>)
  }
}

export default TagFilter