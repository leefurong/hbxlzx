import React from 'react';
import './App.css';
import DoctorList from './components/DoctorList';
import TagFilter from './components/TagFilter';

function App() {
  const tags = [
    {
      tag: '医务工作者',
      url: 'https://baidu.com'
    }
  ];
  return (
    <div className="App">
      <TagFilter tags={tags} />
      <DoctorList />
    </div>
  );
}

export default App;
