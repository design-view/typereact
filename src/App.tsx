import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Subjects from './components/Subjects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubject from './components/AddSubject';
function App() {
  const [subject, setSubject] = useState(0);
  let onChange: (subject: number) => void;
  onChange = (subject) => {
    setSubject(subject)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header sitename='sitename' onChange={onChange} />
        <Routes>
          <Route path="/" element={<>
            <Subjects onChange={onChange} />
            <Lists subject={subject} /></>} />
          <Route path="addSubject" element={<AddSubject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
