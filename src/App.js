import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList';
import TagFilter from './components/TagFilter';
import { contains, first } from './utils';
import { tags } from './tags';

function findTagByHash(hash) {
  const f = (tag, hash) => {
    return tag.url.endsWith(hash);
  };
  const tagObj = first(tags, hash, f);
  return tagObj && tagObj.tag;
}
function tagMatch(doctorTags, hash) {
  const tag = findTagByHash(hash);
  return tag === '所有' ? true : contains(doctorTags, tag);
}

class App extends Component {
  constructor(props) {
    console.log('constructor.props:', props);
    super(props);
    this.state = {
      doctors: [],
      tag_hash: 'all'
    };
  }
  async fetchDoctors(tag_hash) {
    // TODO: 拿到接口后，更新这里。
    const all_doctors = [
      {
        avatar: 'https://profile.csdnimg.cn/4/1/C/3_s1674521',
        name: '沐风',
        tags: ['医务工作者', '患者及家属'],
        description: '国家二级心理咨询师'
      },
      {
        avatar: 'https://dot.asahi.com/S2000/upload/2016053100148_5.jpg',
        name: '儿童孕产妇专家',
        tags: ['儿童/孕产妇', '患者及家属'],
        description: '国家二级心理咨询师'
      },
      {
        avatar: 'https://dot.asahi.com/S2000/upload/2016053100148_5.jpg',
        name: '医生',
        tags: ['医务工作者', '患者及家属'],
        description: '国家二级心理咨询师'
      }
    ];
    return all_doctors.filter(doctor => tagMatch(doctor.tags, tag_hash));
  }
  async componentWillMount() {
    console.log('willMount', this.state.tag_hash);
    console.log('props:', this.props);
    const tag = this.props.match.params.tag;
    const doctors = await this.fetchDoctors(tag);
    this.setState({ doctors });
  }

  render() {
    const { doctors } = this.state;
    return (
      <div className="App">
        <TagFilter tags={tags} />
        <DoctorList doctors={doctors} />
      </div>
    );
  }
}

export default App;
