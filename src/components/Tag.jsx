import React from 'react'
import { groups } from '../groups'

export default (({ tag }) => (<div className="tag">
  {tag ? groups[tag].title : "不限"}
</div>))