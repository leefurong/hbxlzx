import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList';
import TagFilter from './components/TagFilter';
import { tags } from './tags';
import { fetchGroup } from './request.js';
import 'antd-mobile/dist/antd-mobile.css';

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
    const tagName = this.props.match.params.tag;
    const doctors = await this.fetchDoctors(tagName);
    this.setState({ doctors, tagName });
  }

  render() {
    const { doctors } = this.state;
    return (
      <div className="App">
        <TagFilter currentTag={this.state.tagName} />
        <DoctorList doctors={doctors} />
      </div>
    );
  }
}

export default App;
