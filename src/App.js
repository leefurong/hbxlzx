import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList';
import TagFilter from './components/TagFilter';
import { tags } from './tags';
import { fetchGroup } from './request.js';

class App extends Component {
  constructor(props) {
    console.log('constructor.props:', props);
    super(props);
    this.state = {
      doctors: [],
      tagName: '*'
    };
  }
  async fetchDoctors(tagName) {
    return fetchGroup(tagName);
  }
  async componentWillMount() {
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
