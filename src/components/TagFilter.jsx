import React from 'react'
import Tag from './Tag'

export default ({ tags }) => (<div className="tags">
  <a href={"/doctors/"}>
    <Tag tag={""} />
  </a>
  {"ABCDEF".split("").map(
    (tagName) =>
      (<a href={"/doctors/" + tagName}>
        <Tag tag={console.log("tagname is:", tagName) || tagName} />
      </a>))}
</div>)