import React from 'react';
import LandingContainer from 'containers/LandingContainer';
import { ContextOneProvider } from 'context/ContextOne';
import './App.scss';

const App = () =>  {
  return (
    <>
      <ContextOneProvider>
        <LandingContainer />
      </ContextOneProvider>
    </>
  )
};

export default App;
