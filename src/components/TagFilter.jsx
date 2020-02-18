import React from 'react'
import Tag from './Tag'

export default ({ tags }) => (<div className="tags">
  {"*ABCDEF".split("").map(
    (tagName) =>
      (<a href={"/doctors/" + tagName}>
        <Tag tag={tagName} />
      </a>))}
</div>)