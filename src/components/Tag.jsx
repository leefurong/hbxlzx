import React from 'react'
import { groups } from '../groups'

export default (({ tag }) => (<span className="tag">
  {tag !== "*" ? groups[tag].title : "不限"}
</span>))