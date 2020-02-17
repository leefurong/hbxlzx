import React from 'react'

import DoctorInfo from './DoctorInfo'

class DoctorList extends React.Component {
  render() {
    const { doctors } = this.props;
    return (<div>
      {doctors.map(doctor => (<DoctorInfo info={doctor} key={doctor.name} />))}
    </div>

    )
  }
}

export default () => {
  const doctors = [
    {
      avatar: "https://profile.csdnimg.cn/4/1/C/3_s1674521",
      name: "沐风",
      tags: ["医务工作者", "患者及家属"],
      description: "国家二级心理咨询师"
    },
    {
      avatar: "https://dot.asahi.com/S2000/upload/2016053100148_5.jpg",
      name: "美女",
      tags: ["医务工作者", "患者及家属"],
      description: "国家二级心理咨询师"
    }
  ]
  return (<DoctorList doctors={doctors} />)
}