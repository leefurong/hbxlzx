import React from 'react'

export default ({ tags }) => (<div className="tags">
  {tags.map(({ tag, url }) => <a href={url}>{tag}</a>)}
</div>)