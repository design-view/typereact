import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Subjects from './components/Subjects';

function App() {
  const [subject, setSubject] = useState(0);
  let onChange: (subject: number) => void;
  onChange = (subject) => {
    setSubject(subject)
  }

  return (
    <div className="App">
      <Header sitename='sitename' />
      <Subjects onChange={onChange} />
      <Lists subject={subject} />
    </div>
  );
}

export default App;
