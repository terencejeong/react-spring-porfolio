import React, { useState, useEffect, useContext } from 'react';
import { ContextOne } from 'context/ContextOne';
import Header from 'components/Header'
import Particles from 'components/Particles'
import Card from 'components/Card'

const colorThemes = [
  {
    backgroundColor: '#fff59e', // pale lemon yellow
    particleColor: '#f20000', // red orange
    cardBackground: '#417777', // medici blue
    cardTextColor: '#417777',
    headerColor: '#c3a55c' // isabella color
  },
  {
    backgroundColor: '#a32100', // brick red
    particleColor: '#f5f5b8', // sulphur yellow
    cardBackground: '#ffbf6e', // cinnamon buff
    cardTextColor: '#ffbf6e',
    headerColor: '#ffa6d9' // corinthian pink
  },
  {
    backgroundColor: '#ff5ec4', // eosine pink
    particleColor: '#b68400', // khaki
    cardBackground: '#b8b8ff', // grayish lavender
    cardTextColor: '#b8b8ff',
    headerColor: '#53225c' // dark skate purple
  },
  {
    backgroundColor: '#bfc433', // pyrite yellow
    particleColor: '#bfffe6', // nile blue
    cardBackground: '#20b2aa', // sea green
    cardTextColor: '#20b2aa',
    headerColor: '#ff3319' // peach red
  },
  {
    backgroundColor: '#b5ffc2', // turquoise green
    particleColor: '#80ffcc', // calamine blue
    cardBackground: '#ffbf6e',
    cardTextColor: '#ffbf6e',
    headerColor: '#ff616b' // gernadine pink
  },
];

const newTheme = () => colorThemes[Math.floor(Math.random() * colorThemes.length)];

const LandingContainer = () => {
  const [ theme, setTheme ] = useState(newTheme);
  let { state, dispatch } = React.useContext(ContextOne);
  return (
    <>
      <button
        onClick={() => setTheme(newTheme)}
      >
        click me
      </button>
      <div className="main">
        <Particles>
          <div className="container">
            <Header />
          </div>
          <div className="container">
            <div className="row">
              <div className="column">
                <Card />
              </div>
            </div>
          </div>
        </Particles>
      </div>
    </>
  )
};

export default LandingContainer;


// {
//   backgroundColor: '',
//     particleColor: '',
//   cardBackground: '',
//   cardTextColor: '',
//   headerColor: ''
// },
// {
//   backgroundColor: '',
//     particleColor: '',
//   cardBackground: '',
//   cardTextColor: '',
//   headerColor: ''
// }
