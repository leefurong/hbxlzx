import React from 'react'

import DoctorInfo from './DoctorInfo'

export default class DoctorList extends React.Component {
  render() {
    const { doctors } = this.props;
    return (<div>
      {doctors.map(doctor => (<DoctorInfo info={doctor} key={doctor.name} />))}
    </div>

    )
  }
}
