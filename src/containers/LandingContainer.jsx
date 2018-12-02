import React, { useContext } from 'react';
import { partial } from 'ramda';
import magicWand, {ReactComponent as MagicWand } from '../magic_wand.svg';
import { ContextOne } from 'context/ContextOne';
import Header from 'components/Header'
import Particles from 'components/Particles'
import Card from 'components/Card'

const colorThemes = [
  {
    backgroundColor: '#61a8d9',
    particleColor: '#5249af',
    cardBackground: '#5249af',
    cardTextColor: '#1b1430',
    headerColor: '#1b1430'
  },
  {
    backgroundColor: '#e26b80',
    particleColor: '#f6b21d',
    cardBackground: '#6979ba',
    cardTextColor: '#fbfbfb',
    headerColor: '#fbfbfb'
  },
  {
    backgroundColor: '#b8b8ff',
    particleColor: '#53225c',
    cardBackground: '#ff5ec4',
    cardTextColor: '#53225c',
    headerColor: '#53225c'
  },
  {
    backgroundColor: '#f36536',
    particleColor: '#f8c27e',
    cardBackground: '#2c353a',
    cardTextColor: '#f36536',
    headerColor: '#f8c27e'
  },
  {
    backgroundColor: '#3d666d',
    particleColor: '#f3f7fb',
    cardBackground: '#97b4b5',
    cardTextColor: '#3d666d',
    headerColor: '#f3f7fb'
  },
  {
    backgroundColor: '#a24b40',
    particleColor: '#f8f5f3',
    cardBackground: '#d9a563',
    cardTextColor: '#f8f5f3',
    headerColor: '#f8f5f3'
  },
  {
    backgroundColor: '#fbfbfb',
    particleColor: '#e26b80',
    cardBackground: '#6979ba',
    cardTextColor: '#fbfbfb',
    headerColor: '#e26b80'
  },
  {
    backgroundColor: '#e1ad2b',
    particleColor: '#b05c65',
    cardBackground: '#eaf4fb',
    cardTextColor: '#0a4d7b',
    headerColor: '#0a4d7b'
  },
  {
    backgroundColor: '#fafaf6',
    particleColor: '#6acab2',
    cardBackground: '#9565b6',
    cardTextColor: '#fafaf6',
    headerColor: '#6acab2'
  }
];

const LandingContainer = () => {
  let { state, dispatch } = React.useContext(ContextOne);
  let setColor = (color) => dispatch({ type: "set-theme", payload: color });
  const getRandomTheme = () => {
    let currentTheme = state.theme;
    let themesWithoutCurrentTheme = colorThemes.filter(theme => theme.backgroundColor !== currentTheme.backgroundColor);
    return themesWithoutCurrentTheme[Math.floor(Math.random() * themesWithoutCurrentTheme.length)];
  };
  // without functional
  // let setColor = color => () => dispatch x
  const {
    backgroundColor,
    particleColor,
    cardBackground,
    cardTextColor,
    headerColor
  } = state.theme;
  return (
    <>
      <div style={{backgroundColor: backgroundColor }}>
        <MagicWand
          src={magicWand}
          onClick={partial(setColor, [getRandomTheme()])}
          style={{backgroundColor: backgroundColor, border: 'none', height: '40px'}}
        />
      </div>
      <div className="main">
        <Particles activeTheme={state.theme}>
          <div className="container">
            <Header headerColor={headerColor} />
          </div>
          <div className="container">
            <div className="row">
              {cards.map((card, i) => (
                <div className="column" key={i}>
                  <Card cardBackground={cardBackground}>
                    <div className="card-title" style={{color: cardTextColor}}>
                      {card.title}
                    </div>
                    <div className="card-body" style={{color: cardTextColor}}>
                      {card.description}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Particles>
      </div>
    </>
  )
};

const cards = [
  {
    title: 'About Me',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
      "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor " +
      "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit" +
      " anim id est laborum.",
  },
  {
    title: 'Projects',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
      "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor " +
      "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit" +
      " anim id est laborum.",
  },
  {
    title: 'Skills',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
      "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor " +
      "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit" +
      " anim id est laborum.",
  }
];

export default LandingContainer;




// {
//   backgroundColor: '#ff616b', //gernadine pink
//     particleColor: '#b5ffc2', //turquoise green
//   cardBackground: '#ffbf6e',
//   cardTextColor: '#ffbf6e',
//   headerColor: '#80ffcc' //  calamine blue
// cardBackground: '#ff5ec4', // eosine pink
// },
