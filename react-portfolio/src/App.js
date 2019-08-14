import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Intro from './components/introduction';
import WhoAmI from './components/whoami';
import MySelf from './components/myself';
// import Experience from './components/experience';
import MyJourneyHeader from './components/myjourneyheader';
import Schooling from './components/schooling';
import LeftArrow from './components/leftarrow';
import College from './components/college';
import RightArrow from './components/rightarrow';
import FreeLancing from './components/freelancing';
import CurrentJob from './components/currentjob';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div id={"container-wrapper"}>
        <NavBar/>
        <Intro/>
        <WhoAmI/>
        <MySelf/>
        {/*<Experience/>*/}
        <MyJourneyHeader/>
        <Schooling/>
        <LeftArrow/>
        <College/>
        <RightArrow/>
        <FreeLancing/>
        <LeftArrow/>
        <CurrentJob/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
